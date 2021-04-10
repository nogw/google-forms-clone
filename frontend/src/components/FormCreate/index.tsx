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

interface Props {
  titleForm: any,
  setTitleForm: any,
}

const TitleForm: React.FC<any> = ({ titleForm, setTitleForm }: Props) => {
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

const CardForm: React.FC = () => {
  const [mode, setMode] = useState("choice")
  const [options, setOptions] = useState([
    {
      index: 1,
      content: ""
    }
  ])

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMode(event.target.value as string);
  };

  const handleNewOption = () => {
    if (options.length < 5) {
      setOptions([...options, {index: options.length + 1, content: ""}])
    } else {
      console.log("max options")
    }
  }

 

  const newState = (id, value): StateProps  => {
    options.map((obj: any) => {
      obj.id === id ? { ...obj, content: value } : obj
    })
  };

  let method
  if (mode === "choice") {
    method = (
      <div className="questions">
        {
          options.map((option) => {
            return (
              <div key={option.index} id={`${option.index}`} className="question">
                <div className="circle"/>
                <div className="inputQuestion">
                  <input type="text" onChange={handleChange} spellCheck="false" placeholder="Option"/>
                  <div className="linesQuestion">
                    <div className="lineQuestion2"/>
                    <div className="lineQuestion"/>
                  </div>
                </div>
              </div>
            )
          })
        }
        <div className="buttonAddNew">
          <div className="circle"/>
          <button onClick={handleNewOption}>
            Add option
            <div className="line"/>
          </button>
        </div>
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
            <textarea spellCheck="false" placeholder="Question" />
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

const FormCreate: React.FC<any> = ({ titleForm, setTitleForm }: Props) => {
  return (
    <Container>
      <TitleForm titleForm={titleForm} setTitleForm={setTitleForm}/>
      <CardForm/>
      <CardForm/>
      <CardForm/>
    </Container>
  );
}

export default FormCreate;