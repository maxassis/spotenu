import React from 'react';
import GlobalStyles from './components/styles/global';
import Inicio from './components/Inicio';
import Signup from './components/signup/index'
import SelecionarUsuario from './components/selecionarUsuario';

function App() {
  return (
    <>
      <GlobalStyles/>
     {/* <Inicio/> */}
     {/* <Signup/> */}
      <SelecionarUsuario/>

    </>
  );
}

export default App;
