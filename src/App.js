import React from 'react';
import GlobalStyles from './components/styles/global';
import Inicio from './components/Inicio';
import Login from './components/login/index'
import SignupUnico from './components/signup/SignupUnico/index'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
      
        <Switch>

          <Route exact path='/login'>
            <Login />
          </Route>

          <Route exact path='/signup'>
            <SignupUnico />
          </Route>

          <Route exact path='/'>
            <Inicio />
          </Route>

        </Switch>
      
      </BrowserRouter>
    </>
  );
}

export default App;
