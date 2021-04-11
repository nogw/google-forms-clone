import React, { useState, useEffect } from 'react';

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

const TitleForm: React.FC<any> = ({ titleForm, setTitleForm }: any) => {
  return (
    <Title>
      <div className="cardContainer">
        <div className="cardCreate">      
          <div className="card">
            <div className="topBar"/>
            <div className="leftBar"/>
            <div className="textareaTitle">
              <textarea spellCheck="false" value={titleForm} onChange={e => setTitleForm(e.target.value)} placeholder="Form title" />
              <div className="lines">
                <div className="line2"/>
                <div className="line"/>
              </div>
            </div>
            <div className="textareaDescription">
              <textarea spellCheck="false" placeholder="Form description" />
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

interface StateProps {
  id: string,
  value: string
} 

const CardForm: React.FC<any> = ({ options, setOptions, question, type, questions, index }: any) => {
  const [mode, setMode] = useState("choice")
  var optionsEdit = [...options]

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMode(event.target.value as string)

    optionsEdit[index].type = event.target.value as string
    setOptions(optionsEdit)
  };

  const handleNewOption = () => {
    if (options[index].questions.length < 5) {
      optionsEdit[index].questions.push({ option: "" })
      setOptions(optionsEdit)
    } else {
      console.log("max options")
    }
  }

  const updateQuestions = (i: number, val: string) => {
    optionsEdit[index].questions[i].option = val
    setOptions(optionsEdit)
  }

  const updateTitleQuestion = ( val: string ) => {
    optionsEdit[index].question = val
    setOptions(optionsEdit)
  }

  const deleteQuestion = ( j: number ) => {
    optionsEdit[index].questions.splice(j, 1)
    setOptions(optionsEdit)
  }

  let method
  if (mode === "choice") {
    method = (
      <div className="questions">
        {
          questions.map((option: any, index: number) => {
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
        {options[index].questions.length < 5 ? (
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
  } else if (mode === "paragraph") {
    method = (
      <div className="paragraph">
        <textarea disabled placeholder="Long response text"/>
      </div>
    )
  } else if (mode === "short") {
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
              value={mode}
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
            <IconButton>
              <DeleteOutlineOutlinedIcon/>
            </IconButton>
            <IconButton className="add">
              <AddCircleOutlineOutlinedIcon/>
            </IconButton>
          </div>
        </div>
      </div>
    </Card>
  )
}

const FormCreate: React.FC<any> = ({ titleForm, setTitleForm }: any) => {
  const [options, setOptions] = useState([
    {
      question: "",
      type: "",
      questions: [
        {
          option: ""
        }
      ]
    }
  ])

  return (
    <Container>
      <TitleForm options={options} setOptions={setOptions} titleForm={titleForm} setTitleForm={setTitleForm}/>
      {
        options.map((option: any, index: number) => {
          return (
            <CardForm 
              question={option.question} 
              type={option.type} 
              questions={option.questions} 
              options={options} 
              setOptions={setOptions}
              index={index}
            />
          )
        })
      }
    </Container>
  );
}

export default FormCreate;