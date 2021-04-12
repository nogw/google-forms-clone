import React from 'react';
import GlobalStyle from './styles'

import Root from './pages/Root'
import New from './pages/New';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/" exact>
          <Root/>
        </Route>
        <Route path="/new" exact>
          <New/>
        </Route>
      </Switch>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
