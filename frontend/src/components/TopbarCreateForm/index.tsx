import React from 'react';
import Logo from '../logo.svg'

import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'

import { Container, ButtonSubmit } from './styles';

interface Props {
  titleForm: any,
  setTitleForm: any,
}

const TopbarCreateForm: React.FC<any> = ({ titleForm, setTitleForm }: Props) => {
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
      <ButtonSubmit>
        Submit
      </ButtonSubmit>
      <IconButton>
        <MoreVertIcon style={{ color: "#5f6368" }}/>
      </IconButton>
      <Avatar/>
    </Container>
  );
}

export default TopbarCreateForm;