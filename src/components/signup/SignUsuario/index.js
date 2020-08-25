import React from 'react'
import * as S from './styled'
import Header from '../../header/index'
import Footer from '../../footer/index'
import { useForm } from "react-hook-form";



function SignupUsuario() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <>
        <Header/>
        <S.Container>
        <S.ContSignup>
            <S.Divi>
            <S.Texto>Cadastro Usuario</S.Texto>
            </S.Divi>

            <S.Formulario onSubmit={handleSubmit(onSubmit)}>

            <S.Leibel> Nome </S.Leibel>
            <S.Inputi placeholder="Digite seu nome" name="name" required ref={register} />

            <S.Leibel> Nickname </S.Leibel>
            <S.Inputi placeholder="Digite seu nickname" name="nickname" required ref={register} />
            
            <S.Leibel> Email </S.Leibel>
            <S.Inputi placeholder="Digite seu email" name="email" required ref={register} type="email" />
            
            <S.Leibel> Plano </S.Leibel>
            <S.Selecti name="plano" ref={register}>
                <option value="premim">Premium</option>
                <option value="free">Free</option>
            </S.Selecti>

            <S.Leibel> Senha </S.Leibel>
            <S.Inputi label="password" placeholder="Digite uma senha" name="password" required ref={register} />
            
            <S.Botao type="submit">Enviar</S.Botao> 

            </S.Formulario>

    
        </S.ContSignup> 

        </S.Container>

        <Footer/>

        </>


    )




}

export default SignupUsuario