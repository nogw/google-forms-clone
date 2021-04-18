import React, { useContext, useEffect, useState } from 'react';
import GlobalStyle from './styles'

import { Context } from './UserProvider';
import Root from './pages/Root'
import New from './pages/New';
import Login from './components/Login';
import auth from './auth'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import dotenv from 'dotenv'
import jwtDecode from 'jwt-decode'
dotenv.config()

function PrivateRoute({ component: Component, ...rest }: any) {
  return <Route {...rest} render={(props: any) => (
    auth.isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
    )
  )}/>
}

function App() {
  const [user, setUser] = useContext(Context)
  const userObj = auth.isAuthenticated()

  useEffect(() => {
    userObj && setUser(jwtDecode(userObj))
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login/>
        </Route>

        <PrivateRoute path="/" exact component={() => <Root/>}/>
        
        <Route path="/f/:id" exact>
          <New/>
        </Route>
      </Switch>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
