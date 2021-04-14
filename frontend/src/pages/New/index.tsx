import React, { useEffect, useState } from 'react';

import FormCreate from '../../components/FormCreate'
import TopbarCreateForm from '../../components/TopbarCreateForm'
import Answer from '../../components/Answer'

import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import api from '../../services/api';

const Container = styled.div`
  height: 100vh;
  background-color: #f1f1f1;
`;

interface ParamTypes {
  id: string
}

const New: React.FC = () => {
  const [errors, setErrors] = useState("")  
  const id = useParams<ParamTypes>()

  const [options, setOptions] = useState<any>({
    title: "",
    description: "",
    cards: []
  })

  useEffect(() => {
    const getForm = () => {
      api.get('/form/getForm', {
        params: {
          idForm: id.id
        }
      }).then((res) => {
        console.log(res.data.result.cards)
        setOptions(res.data.result)
      }).catch((err) => {
        console.log(err)
      })
    }

    getForm()
  }, [])

  const verifyErrors = () => {
    if ( options.title.length < 3) {
      setErrors("the title must be at least 3 characters")
      return false 
    }

    for( var c = 0 ; c < options.cards.length ; c++) {
      if (options.cards[c].question.length < 3) {
        setErrors("all cards must have a question of at least 3 characters")
        break
      } else {
        setErrors("")
      }

      if (options.cards[c].type == "choice") {
        for( var j = 0 ; j < options.cards[c].questions.length ; j++) {
          if (options.cards[c].questions[j].option.length < 3) {
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
      {/* <TopbarCreateForm 
        titleForm={options.title} 
        errors={errors} 
        verifyErrors={verifyErrors}
      />
      
      <FormCreate
        options={options} 
        setOptions={setOptions}
      /> */}
      <Answer options={options} setOptions={setOptions}/>
    </Container>
  );
}

export default New;