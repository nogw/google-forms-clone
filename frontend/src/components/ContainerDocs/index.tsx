import React, { useContext, useState } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton'
import { Container, Texts, Docs, Doc } from './styles';
import api from '../../services/api';
import { Context } from '../../UserProvider';
import dayjs from 'dayjs'
import CircularProgress from '@material-ui/core/CircularProgress';
import  { useHistory } from 'react-router-dom'

const ContainerDocs: React.FC = () => {
  const [user, setUser] = useContext(Context)
  const [load, setLoad] = useState(false)
  const history = useHistory() 

  const createForm = () => {
    setLoad(true)
    
    api.post("/form/create", {
      user_id: user.id,
      data: dayjs().format(`MMMM D, YYYY`),
      cards: [
        {
          question: "",
          type: "choice",
          questions: [
            {
              option: ""
            }
          ]
        },
      ]    
    })
    .then((res) => {
      console.log(res.data)
      history.push(`/f/${res.data.link}`)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }
  
  return (
    <Container>
      <Texts>
        <h1>Start a new form</h1>
        <IconButton size="small">
          <MoreVertIcon/>
        </IconButton>
      </Texts>
      <Docs>
        <Doc onClick={createForm}>
          <div className="image">
            {
              load ? (
                <CircularProgress/>
              ) : (
                <img src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png" alt="add"/>
              )
            }
          </div>
          <div className="text">
            <h1>In blank</h1>
          </div>
        </Doc>
      </Docs>
    </Container>
  );
}

export default ContainerDocs;