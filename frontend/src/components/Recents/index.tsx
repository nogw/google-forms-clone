import ViewListOutlinedIcon from '@material-ui/icons/ViewListOutlined';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../UserProvider';
import { Container, Header, FormContainer } from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom'

import dayjs from 'dayjs'

const Form: React.FC<any> = ({ title, id }) => {
  return (
    <Link to={`/f/${id}`}>
      <FormContainer>
        <div className="gray">
          <img src="https://riu.cead.unb.br/images/google_forms.png?1591378945" alt="forms"/>
        </div>
        <div className="content">
          <h1 className="title">titulo titulo</h1>
          <div className="infos">
            <ListAltRoundedIcon className="list"/>
            <p>Open {dayjs().format(`MMMM D, YYYY`)}</p>
            <MoreVertOutlinedIcon className="dots"/>
          </div>
        </div>
      </FormContainer>
    </Link>
  )
}

const Recents: React.FC = () => {
  const [recents, setRecents] = useState([])
  const [user, setUser] = useContext(Context)

  useEffect(() => {
    const getForms = () => {
      api.get('/form/getMyForms', {
        params: {
          id: '6074613c97c77f1247b85ff8'
        }
      }).then((res) => {
        setRecents(res.data.results)
      })
    }

    getForms()
  }, [])

  return (
    <Container>
      <Header>
        <h1>Recent forms</h1>
        <div className="right">
          <div className="button">
            <button>
              <ViewListOutlinedIcon style={{ color: '#5f6368' }}/>
            </button>
          </div>
          <div className="button">
            <button>
              <SortByAlphaIcon style={{ color: '#5f6368' }}/>
            </button>
          </div>
          <div className="button">
            <button>
              <FolderOpenOutlinedIcon style={{ color: '#5f6368' }}/>
            </button>
          </div>
        </div>
      </Header>
      {
        recents ? (
          <div className="recentForms">
            {
              recents.map((recent: any) => {
                return (
                  <Form key={recent._id} id={recent._id} title={recent.title}/>
                )
              })
            }
          </div>
        ) : (
          <div className="noForms">
            <h1>No forms yet</h1>
            <p>Click + to create a new form.</p>
          </div>
        )
      }
    </Container>
  );
}

export default Recents;