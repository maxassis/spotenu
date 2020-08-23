import React from 'react'
import Header from '../header/index'
import Footer from '../footer/index'
import * as S from './styled'


function SelecionarUsuario() {
    return(
        <>
        <Header/>
            <S.Container>
                <p>Escolha o tipo de usuario</p>
             { /*  <S.Quadro1><S.Titulos>OUVINTES</S.Titulos></S.Quadro1>
                <S.Quadro2><S.Titulos>BANDAS</S.Titulos></S.Quadro2>
             <S.Quadro3><S.Titulos>ADMINISTRADOR</S.Titulos></S.Quadro3> */}

             </S.Container>
        <Footer/>        
        
        
        </>




    )

}

export default SelecionarUsuario