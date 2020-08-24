import React from 'react'
import * as S from './styled'
import Header from '../../header/index'
import Footer from '../../footer/index'


function SignupUsuario() {
    return(
        <>
        <Header/>
        <S.Container>
        <S.ContSignup>
            <S.Divi>
            <S.Texto>Cadastro Usuario</S.Texto>
            </S.Divi>

            <S.Formulario>

            <S.Leibel>Nome</S.Leibel>
            <S.Inputi placeholder="Digite seu nome" />
            <S.Leibel>Nickname</S.Leibel>
            <S.Inputi placeholder="Digite seu nickname" />
            <S.Leibel>Password</S.Leibel>
            <S.Inputi placeholder="Digite uma senha" />
            <S.Botao>Enviar</S.Botao>
            
            </S.Formulario>
            
            
            
        </S.ContSignup> 

        </S.Container>

        <Footer/>

        </>


    )




}

export default SignupUsuario