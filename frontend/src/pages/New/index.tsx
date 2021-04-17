import React, { useContext, useEffect, useState } from 'react';

import FormCreate from '../../components/FormCreate'
import TopbarCreateForm from '../../components/TopbarCreateForm'
import Answer from '../../components/Answer'
import FormAnswers from '../../components/FormAnswers'

import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import api from '../../services/api';
import { Context } from '../../UserProvider';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Container = styled.div`
  height: 100vh;
  background-color: #f1f1f1;

  .top {
    width: 100%;
    min-height: 40px;
    
    .MuiTabs-root {
      background-color: #fff;
      height: 40px;
      box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);

      .MuiTab-root {
        font-size: 14px;
        text-transform: lowercase;
        min-width: 120px;
        padding: 0px;
        display: flex;
        align-items: center;
      
        .MuiButtonBase-root {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;

          .MuiTouchRipple-root {
            height: 40px;
          }
        } 
      }
    }	
  }
`;

interface ParamTypes {
  id: string
}

const New: React.FC = () => {
  const [errors, setErrors] = useState("")  
  const id = useParams<ParamTypes>()
  const [user, setUser] = useContext(Context)

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

  const updateForm = async () => {
    await api.post('/form/update', {
      _id: options._id,
      user_id: options.user_id,
      title: options.title,
      description: options.description,
      cards: options.cards
    })
    .then((sucess) => {
      console.log(sucess.data)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  const verifyErrors = () => {
    if ( options.title.length < 3) {
      return "the title must be at least 3 characters"
    }

    for( var c = 0 ; c < options.cards.length ; c++) {
      if (options.cards[c].question.length < 3) {
        return "all cards must have a question of at least 3 characters"
      } 

      if (options.cards[c].type == "choice") {
        for( var j = 0 ; j < options.cards[c].questions.length ; j++) {
          if (options.cards[c].questions[j].option.length < 3) {
            return "in choice cards, put at least one option of at least 3 characters"
          }
        }
      }
    }

    return ""
  }
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Container>
      {
        options.user_id == user.id ? (
          <>
            <TopbarCreateForm 
              errors={errors} 
              setErrors={setErrors}
              titleForm={options.title} 
              updateForm={updateForm}
              verifyErrors={verifyErrors}
            />
            
            <div className="top">
              <Tabs
                value={value} 
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="questions" />
                <Tab label="answers" />
              </Tabs>
            </div>
            {
              value == 0 ? (
                <FormCreate
                  options={options} 
                  setOptions={setOptions}
                />
              ) : (
                <FormAnswers/>
              )
            }
          </>
        ) : (
          <Answer options={options} setOptions={setOptions}/>
        )
      }
    </Container>
  );
}

export default New;