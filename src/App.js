import React from 'react';
import GlobalStyles from './components/styles/global';
import Inicio from './components/Inicio';
import Login from './components/login/index'
import Page404 from './components/404/index'
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

          <Route path='*'>
            <Page404 />
          </Route>

        </Switch>
      
      </BrowserRouter>
    </>
  );
}

export default App;
