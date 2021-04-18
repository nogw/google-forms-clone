import React, { useEffect, useState } from 'react';

import EqualizerIcon from '@material-ui/icons/Equalizer';
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Container, Counter } from './styles';
import api from '../../services/api';
import { AnyNsRecord } from 'node:dns';

const FormAnswers: React.FC<any> = ({ answers, setAnswers }) => {
  const [answersUsers, setAnswersUsers] = useState<any>([])
  var result = Object.keys(answersUsers).map((key) => answersUsers[key])

  useEffect(() => {
    const answerAddInState = (value: any, index: number) => {      
      if (answersUsers[index]) {
        setAnswersUsers((prev: any) => ({...prev, [index]: { ...prev[index], answer: [...prev[index].answer, { response: value.answer }] }}))
        console.log(answersUsers[index])
      } else {
        setAnswersUsers((prev: any) => ({...prev, [index]: { question: value.question, answer: [ { response: value.answer } ] }}))
      }
    }

    for (var k = 0; k < answers.length; k++) {
      for (var j = 0; j < answers[k].answers.length; j++ ) {
        answerAddInState(answers[k].answers[j], j)
      }
    }

    console.log(answersUsers)
  }, [])

  return (
    <Container>
      <Counter>
        <h1>{answers.length} replies</h1>
        
        <IconButton size="small">
          <EqualizerIcon className="chart"/>
        </IconButton>
        
        <IconButton size="small">
          <MoreVertIcon/>
        </IconButton>
        
      </Counter>

      {
        answers.length > 0 ? (
          <div className="list">
            {
              result.map((answer: any, index: number) => {
                return (
                  <div className="answer" key={index}>
                    <p className="firstP">
                      {answer.question}
                    </p>
                    {
                      <p className="secondP">
                        {answer.answer.length} response
                      </p>
                    }
                    {
                      answer.answer.map((ans: any, index: number) => {
                        return (
                          <p className="response" key={index}>
                            {ans.response}
                          </p>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        ) : (
          <div className="noResponses">
            <p>Waiting for answers</p>
          </div>
        )
      }
    </Container>
  );
}

export default FormAnswers;