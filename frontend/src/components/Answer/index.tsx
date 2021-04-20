import React, { useContext, useState } from 'react';

import { Container, Title, Card } from './styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import IconButton from '@material-ui/core/IconButton';
import ErrorIcon from '@material-ui/icons/ErrorOutlineRounded'
import api from '../../services/api';
import dayjs from 'dayjs';
import userEvent from '@testing-library/user-event';
import { Context } from '../../UserProvider';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const TitleCard: React.FC<any> = ({ title, description }) => {
  return (
    <Title>
      <div className="cardContainer">
        <div className="cardCreate">      
          <div className="card">
            <div className="topBar"/>

            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Title>
  )
}

const CardItem: React.FC<any> = ({ setAnswerObj, question, questions, type, index }) => {  
  const handleChangeAnswer = (value: any) => {
    setAnswerObj((prev: any) => ({...prev, [index]: { question: question, answer: value, typeForm: type }}))
  } 

  let method

  if (type == "choice") {
    method = (
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" onChange={(e) => handleChangeAnswer(e.target.value)}>
          {
            questions.map((card: any) => {
              return (
                <FormControlLabel key={card._id} value={card.option} control={<Radio />} label={card.option} />
              )
            })
          }
        </RadioGroup>
      </FormControl>
    )
  } else if (type == "paragraph") {
    method = (
      <div className="paragraph">
          <TextareaAutosize spellCheck="false" placeholder="Your answer"  onChange={(e) => handleChangeAnswer(e.target.value)}/>
          <div className="lines">
            <div className="line2"/>
            <div className="line"/>
          </div>
      </div>
    )
  } else if (type == "short") {
    method = (
      <div className="short">
        <input spellCheck="false" placeholder="Your answer" onChange={(e) => handleChangeAnswer(e.target.value)}/>
        <div className="lines">
          <div className="line2"/>
          <div className="line"/>
        </div>
      </div>
    )
  }
  
  return (
    <Card>
      <div className="card">
        <h1>{question}</h1>

        {method}
      </div>
    </Card>
  )
}

const Answer: React.FC<any> = ({ options, setOptions }) => {
  const [answerObj, setAnswerObj] = useState<any>([])
  
  const [errors, setErrors] = useState("")
  const [confirm, setConfirm] = useState("")
  const [IsAnswer, setIsAnswer] = useState(false)
  
  const [user, setUser] = useContext(Context)

  var result = Object.keys(answerObj).map((key) => answerObj[key])

  const verifyAnswer = () => {
    var keyCount = Object.keys(answerObj).length

    if (keyCount < options.cards.length) {
      return "answer all questions"
    } else {
      for( var k = 0 ; k < keyCount ; k++) {
        if (answerObj[k].answer.length < 3) {
          return "reply with at least 3 characters"
          break
        }
      }
    }

    return ""
  }

  const postAnswer = async () => {
    var getErrors: any = verifyAnswer()

    if (getErrors.length < 1) {
      if (!IsAnswer) {
        await api.post('/answer/createAnswer', {
          form_id: options._id,
          user_prop_id: options.user_id,
          author: user.name ? user.name : "",
          date: dayjs().format('DD/MM/YYYY'),
          answers: result
        })
        .then((user) => {
          console.log(user)
          setErrors("")
          setIsAnswer(true)
          setConfirm("send")
        })
        .catch((err) => {
          console.log(err)
          setErrors(getErrors)
          setConfirm("")
        })
      } else {
        setErrors("your reply has already been sent")
      }
    } else {
      setConfirm("")
      setErrors(getErrors)
    }   

    console.log(getErrors)
  }

  return (
    <Container>
      <TitleCard title={options.title} description={options.description}/>
      {
        options.cards.map((option: any, index: number) => {
          return (
            <CardItem setAnswerObj={setAnswerObj} key={option._id} index={index} question={option.question} questions={option.questions} type={option.type}/>
          )
        })
      }
      <div className="confirm">
        <button className="submitBtn" onClick={postAnswer}>
          Submit
        </button>
        {
        errors && (
          <div className="error">
            <IconButton size="small">
              <ErrorIcon/>
              <div className="errorMessage">
                <p>{errors}</p>
              </div>
            </IconButton>
          </div>
          )
        }
        {
          confirm && (
            <div className="success">
              <IconButton size="small">
                <CheckCircleOutlineIcon/>
                <div className="successMessage">
                  <p>{confirm}</p>
                </div>
              </IconButton>
            </div>
          )
        } 
      </div>
      
    </Container>
  );
}

export default Answer;