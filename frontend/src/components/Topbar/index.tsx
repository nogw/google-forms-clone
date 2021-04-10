import React from 'react';
import { Container, IconApps } from './styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Logo from '../logo.svg'

const Topbar: React.FC = () => {
  return (
    <Container>
      <div className="left">
        <IconButton>
          <MenuIcon/>
        </IconButton>
        <img src={Logo} alt=""/>
        <h1>Forms</h1>
      </div>

      <div className="input">
        <SearchIcon/>
        <input type="text" placeholder="Search"/>
      </div>

      <div className="right">
        <IconButton>
          <IconApps/>
        </IconButton>
        <Avatar/>
      </div>
    </Container>
  );
}

export default Topbar;