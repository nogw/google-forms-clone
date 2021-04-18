import React, { useContext, useState } from 'react';
import Logo from '../logo.svg'

import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import { Container, ButtonSubmit, Avatar } from './styles';
import { Context } from '../../UserProvider';

const TopbarCreateForm: React.FC<any> = ({ confirm, setConfirm, titleForm, setTitleForm, setErrors, verifyErrors, errors, updateForm }: any) => {
  const [user, setUser] = useContext(Context)
  
  const colors = [
    "#FF7262",
    "#0ACF83",
    "#A259FF",
    "#ED5B61",
    "#4EA9F6",
    "#767F8C",
    "#ebc83d",
    "#badf55",
    "#badf55",
    "#2082AA",
    "#A259FF",
    "#FF8C00",
    "#ED5B61",
    "#4EA9F6",
    "#767F8C",
    "#ebc83d",
    "#badf55",
    "#2082AA",
    "#FF8C00"
  ]
  
  const handleUpdateForm = () => {    
    var getErrors: any = verifyErrors()

    if (getErrors < 1) {
      updateForm()
      setErrors("")
      setConfirm("updated form")
    } else {
      setErrors(getErrors)
      setConfirm("")
    }
  }

  return (
    <Container>
      <div className="left">
        <img src={Logo} alt="reactjs"/>
        <h1>{titleForm ? titleForm : "Untitled form"}</h1>
        <IconButton size="small">
          <FolderOpenIcon style={{ color: "#5f6368" }}/>
        </IconButton>
        <IconButton size="small">
          <StarBorderIcon style={{ color: "#5f6368" }}/>
        </IconButton>
      </div>
      <IconButton>
        <ColorLensOutlinedIcon style={{ color: "#5f6368" }}/>
      </IconButton>
      <IconButton>
        <VisibilityOutlinedIcon style={{ color: "#5f6368" }}/>
      </IconButton>
      <IconButton>
        <SettingsOutlinedIcon style={{ color: "#5f6368" }}/>
      </IconButton>
      <ButtonSubmit onClick={() => handleUpdateForm()}>
        Submit
      </ButtonSubmit>
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
      <IconButton>
        <MoreVertIcon style={{ color: "#5f6368" }}/>
      </IconButton>
      
      <Avatar bgcColor={colors[user.avatarColor]}>
          <h1>{user ? user.name.substring(0, 2) : ""}</h1>
        </Avatar>
    </Container>
  );
}

export default TopbarCreateForm;