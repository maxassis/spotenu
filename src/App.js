import React from 'react';
import GlobalStyles from './components/styles/global';
import Inicio from './components/Inicio';
import SignupUsuario from './components/signup/SignUsuario/index';
import SelecionarUsuario from './components/selecionarUsuario';

function App() {
  return (
    <>
      <GlobalStyles/>
     { /* <Inicio/> */} 
      <SignupUsuario/> 
     {/* <SelecionarUsuario/> */}

    </>
  );
}

export default App;
