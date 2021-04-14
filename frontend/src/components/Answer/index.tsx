import React from 'react';

import { Container, Title, Card } from './styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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

const CardItem: React.FC<any> = ({ question, questions, type }) => {
  let method
  if (type == "choice") {
    method = (
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender">
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
          <textarea spellCheck="false" placeholder="Form description" />
          <div className="lines">
            <div className="line2"/>
            <div className="line"/>
          </div>
      </div>
    )
  } else if (type == "short") {
    <div className="short">
      <input type="text" placeholder="Short response text"/>
    </div>
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
  return (
    <Container>
      <TitleCard title={options.title} description={options.description}/>
      {
        options.cards.map((option: any) => {
          return (
            <CardItem key={option._id} question={option.question} questions={option.questions} type={option.type}/>
          )
        })
      }
    </Container>
  );
}

export default Answer;