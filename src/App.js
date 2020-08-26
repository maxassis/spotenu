import React from 'react';
import GlobalStyles from './components/styles/global';
import Inicio from './components/Inicio';
import SignupUsuario from './components/signup/SignUsuario/index';
import SelecionarUsuario from './components/selecionarUsuario';
import Login from './components/login/index'
import SignupBanda from './components/signup/SignBanda/index'
import SignupAdm from './components/signup/SignAdm/index'

function App() {
  return (
    <>
      <GlobalStyles/>
     { /* <Inicio/> */} 
     {/* <SignupUsuario/> */} 
     {/* <SelecionarUsuario/> */}
      {/*<Login/>*/}
     {/* <SignupBanda/> */}
      <SignupAdm/>

    </>
  );
}

export default App;
