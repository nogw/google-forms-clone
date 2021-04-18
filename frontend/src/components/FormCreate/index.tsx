import React, { useState } from 'react';

import { Container, Title, Card } from './styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import SubjectIcon from '@material-ui/icons/Subject';
import ShortTextIcon from '@material-ui/icons/ShortText';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const TitleForm: React.FC<any> = ({ options, setOptions }) => {
  var optionsEdit = options

  const handleUpdateTitle = ( e: any ) => {
    const {name, value} = e.target
    setOptions((prev: any) => ({...prev, [name]: value}))
  };

  return (
    <Title>
      <div className="cardContainer">
        <div className="cardCreate">      
          <div className="card">
            <div className="topBar"/>
            <div className="leftBar"/>
            <div className="textareaTitle">
              <textarea spellCheck="false" onChange={e => handleUpdateTitle(e)} name="title" value={options.title} placeholder="Form title" />
              <div className="lines">
                <div className="line2"/>
                <div className="line"/>
              </div>
            </div>
            <div className="textareaDescription">
              <textarea spellCheck="false" onChange={e => handleUpdateTitle(e)} name="description" value={options.description} placeholder="Form description" />
              <div className="lines">
                <div className="line2"/>
                <div className="line"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Title>
  )
}

const CardForm: React.FC<any> = ({ 
    options, 
    setOptions, 
    question, 
    type, 
    questions, 
    index,
    _id
  }: any) => {

  var optionsEdit = options
  var card = [...options.cards]

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    card[index].type = event.target.value as string
    setOptions((prev: any) => ({...prev, cards: card}))
  };

  const handleNewOption = () => {
    if (card[index].questions.length < 5) {
      card[index].questions.push({ option: "" })
      setOptions((prev: any) => ({...prev, cards: card}))
    } else {
      console.log("max options")
    }
  }

  const updateQuestions = (i: number, val: string) => {
    card[index].questions[i].option = val
    setOptions((prev: any) => ({...prev, cards: card}))
  }

  const updateTitleQuestion = async ( val: string ) => {    
    card[index].question = val
    setOptions((prev: any) => ({...prev, cards: card}))
  }

  const deleteQuestion = ( j: number ) => {
    if (card[index].questions.length > 1) {
      card[index].questions.splice(j, 1)
      setOptions((prev: any) => ({...prev, cards: card}))
    } else {
      console.log('no')
    }
  }

  const addNewCard = () => {
    card.push({
      question: "",
      type: "choice",
      questions: [
        {
          option: ""
        }
      ]
    })

    setOptions((prev: any) => ({...prev, cards: card}))
  }

  const deleteCard = () => {
    if (card.length > 1) {
      card.splice(index, 1)
      setOptions((prev: any) => ({...prev, cards: card}))
    } else {
      console.log('no')
    }
  }

  let method

  if (options.cards[index].type === "choice") {
    method = (
      <div className="questions">
        {
          options.cards[index].questions.map((option: any, index: number) => {
            return (
              <div key={index} id={`${index}`} className="question">
                <div className="circle"/>
                <div className="inputQuestion">
                  <input type="text" value={option.option} onChange={e => updateQuestions(index, e.target.value)} spellCheck="false" placeholder="Option"/>
                  <div className="linesQuestion">
                    <div className="lineQuestion2"/>
                    <div className="lineQuestion"/>
                  </div>
                </div>
                <IconButton className="deleteBtn" onClick={() => deleteQuestion(index)} size="small">
                  <DeleteOutlineOutlinedIcon style={{ fontSize: 20 }}/>
                </IconButton>
              </div>
            )
          })
        }
        {
        optionsEdit.cards[index].questions.length < 5 ? (
          <div className="buttonAddNew">
            <div className="circle"/>
            <button onClick={handleNewOption}>
              Add option
              <div className="line"/>
            </button>
          </div>
        ) : ""
        }
      </div>
    )
  } else if (optionsEdit.cards[index].type === "paragraph") {
    method = (
      <div className="paragraph">
        <textarea disabled placeholder="Long response text"/>
      </div>
    )
  } else if (optionsEdit.cards[index].type === "short") {
    method = (
      <div className="short">
        <input disabled type="text" placeholder="Short response text"/>
      </div>
    )
  }

  return (
    <Card>
      <div className="card">
        <div className="titleQuestion">
          <div className="textareaQuestion">
            <textarea spellCheck="false" value={question} onChange={e => updateTitleQuestion(e.target.value)} placeholder="Question" />
            <div className="lines">
              <div className="line2"/>
              <div className="line"/>
            </div>
          </div>
          <FormControl variant="outlined" className="input">
            <Select 
              value={optionsEdit.cards[index].type}
              onChange={handleChange}
              >
              <MenuItem value="choice">
                <RadioButtonCheckedIcon/> <span>Multiple choice</span>
              </MenuItem>
              <MenuItem value="paragraph">
                <SubjectIcon/> <span>Paragraph</span>
              </MenuItem> 
              <MenuItem value="short">
                <ShortTextIcon/> <span>Short answer</span>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        {method}
        <div className="delete">
          <div className="divisor"></div>
          <div className="buttons">
            <IconButton onClick={() => deleteCard()}>
              <DeleteOutlineOutlinedIcon/>
            </IconButton>
            <IconButton className="add" onClick={() => addNewCard()}>
              <AddCircleOutlineOutlinedIcon/>
            </IconButton>
          </div>
        </div>
      </div>
    </Card>
  )
}

const FormCreate: React.FC<any> = ({ titleForm, setTitleForm, options, setOptions }: any) => {
  return (
    <Container>
      <TitleForm options={options} setOptions={setOptions}/>
      {
        options.cards.map((option: any, index: number) => {
          return (
            <CardForm
              key={index} 
              question={option.question} 
              type={option.type} 
              questions={option.questions} 
              options={options} 
              setOptions={setOptions}
              index={index}
              _id={option._id}
            />
          )
        })
      }
    </Container>
  );
}

export default FormCreate;