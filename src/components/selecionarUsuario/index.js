import React from 'react'
import Header from '../header/index'
import Footer from '../footer/index'
import * as S from './styled'


function SelecionarUsuario() {
    return(
        <>
        <Header/>
            <S.Container>
                <S.Plans>
                <S.Usuario>Escolha o tipo de usuario</S.Usuario>
                </S.Plans>

              <S.Quadros>  
             <S.Quadro1><S.Titulos>OUVINTES</S.Titulos></S.Quadro1>
            <S.Quadro2><S.Titulos>BANDAS</S.Titulos></S.Quadro2>
             <S.Quadro3><S.Titulos>ADMINISTRADOR</S.Titulos></S.Quadro3>
              </S.Quadros>

             </S.Container>
        <Footer/>        
        
        
        </>




    )

}

export default SelecionarUsuario