import React, { useContext } from 'react';
import { Container, IconApps, Avatar } from './styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton'
import Logo from '../logo.svg'
import { Context } from '../../UserProvider';

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

const Topbar: React.FC = () => {
  const [user, setUser] = useContext(Context)

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
        <Avatar bgcColor={colors[user.avatarColor]}>
          <h1>{user ? user.name.substring(0, 2) : ""}</h1>
        </Avatar>
      </div>
    </Container>
  );
}

export default Topbar;