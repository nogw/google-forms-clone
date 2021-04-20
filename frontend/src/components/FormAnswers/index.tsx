import React, { useEffect, useState } from 'react';

import EqualizerIcon from '@material-ui/icons/Equalizer';
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Container, Counter } from './styles';
import api from '../../services/api';
import { Chart } from "react-google-charts";

const AnswersList: React.FC<any> = ({ answer }) => {
  return (
    <>
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
    </>
  );
}

const AnswerGraphic : React.FC<any> = ({ answer }) => {
  const myData = [{angle: 1}, {angle: 5}, {angle: 2}]
  const [data, setData] = useState([['Linguagens', 'Quantidade']])

  const list: any = []
  const list2: any = [['Linguagens', 'Quantidade']]
  const dataGraphic: any = []

  useEffect(() => {


    for (var k = 0; k < answer.answer.length; k++) {
      list.push(answer.answer[k].response)
    }

    const count = (names: any) =>
    names.reduce((a: any, b: any) => ({ ...a,
      [b]: (a[b] || 0) + 1
    }), {})
    
    const duplicates = (dict: any) =>
      Object.keys(dict).filter((a) => dict[a] > 1)
    
    var obj = count(list)

    for(var i in obj) {
      list2.push([i, obj[i]])
    }

    setData(list2)
  }, [])
  
  return (
    <>
    <p className="firstP">
      {answer.question}
    </p>
    {
      <p className="secondP">
        {answer.answer.length} response
      </p>
    }
    <div className="chart">
      <Chart
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={data}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
    </>
  )
}

const FormAnswers: React.FC<any> = ({ answers, setAnswers }) => {
  const [answersUsers, setAnswersUsers] = useState<any>([])
  var result = Object.keys(answersUsers).map((key) => answersUsers[key])

  useEffect(() => {
    const answerAddInState = (value: any, index: number) => {      
      setAnswersUsers((prev: any) => ({...prev, [index]: { ...prev[index], answer: [...prev[index].answer, { response: value.answer }] }}))      
    }

    var tmp = [...answersUsers]

    for (var k = 0; k < answers.length; k++) {
      for (var j = 0; j < answers[k].answers.length; j++ ) {

        if (tmp[j]) {
          tmp[j].answer.push(
            { 
              response: answers[k].answers[j].answer
            }
          )
        } else {
          tmp.push(
            {
              question: answers[k].answers[j].question,
              type: answers[k].answers[j].typeForm,
              answer: [
                { response: answers[k].answers[j].answer }
              ]
            }
          )
        }
        
        console.log(tmp)
      }
    }

    setAnswersUsers(tmp)
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
        answers.length > 1 ? (
          <div className="list">
            {
              result.map((answer: any, index: number) => {
                return (
                  <div className="answer" key={index}>
                    {
                      answer.type == "choice" ? (
                        <AnswerGraphic answer={answer}/>
                      ) : (
                        <AnswersList answer={answer}/>
                      )
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