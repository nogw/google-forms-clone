import React, { useState } from 'react';

import FormCreate from '../../components/FormCreate'
import TopbarCreateForm from '../../components/TopbarCreateForm'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  background-color: #f1f1f1;
`;

const New: React.FC = () => {
  const [errors, setErrors] = useState("")  
  const [options, setOptions] = useState([
    {
      title: "",
      description: "description",
      cards: [
        {
          question: "",
          type: "choice",
          questions: [
            {
              option: ""
            }
          ]
        }
      ]
    }
  ])

  const verifyErrors = () => {
    if ( options[0].title.length < 3) {
      setErrors("the title must be at least 3 characters")
      return false 
    }

    for( var c = 0 ; c < options[0].cards.length ; c++) {
      if (options[0].cards[c].question.length < 3) {
        setErrors("all cards must have a question of at least 3 characters")
        break
      } else {
        setErrors("")
      }

      if (options[0].cards[c].type == "choice") {
        for( var j = 0 ; j < options[0].cards[c].questions.length ; j++) {
          if (options[0].cards[c].questions[j].option.length < 3) {
            setErrors("in choice cards, put at least one option of at least 3 characters")
            break
          } else {
            setErrors("")
          }
        }
      }
    }
  }

  return (
    <Container>
      <TopbarCreateForm 
        titleForm={options[0].title} 
        errors={errors} 
        verifyErrors={verifyErrors}
      />
      
      <FormCreate
        options={options} 
        setOptions={setOptions}
      />
    </Container>
  );
}

export default New;