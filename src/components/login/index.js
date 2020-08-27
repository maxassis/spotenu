import React from 'react'
import Header from '../header/index'
import Footer from '../footer/index'
import * as S from './styled'
import { useForm } from "react-hook-form";


function Login() {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <>
         <Header pagina="Inicio" pagina2="Signup" url="/" url2="/signup"/>
        <S.Container>
        <S.ContSignup>
            <S.Divi>
            <S.Texto>Login</S.Texto>
            </S.Divi>

            <S.Formulario onSubmit={handleSubmit(onSubmit)}>
            
            <S.Leibel> Email </S.Leibel>
            <S.Inputi placeholder="Digite seu email" name="email" ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
            {errors.email && "Digite um email valido"}

            <S.Leibel> Senha </S.Leibel>
            <S.Inputi label="password" placeholder="Digite uma senha" name="password" type="password" ref={register({ required: true, minLength: 8})} />
            {errors.password && "Digite uma senha com no minimo 8 caracteres"}

            <S.Botao type="submit">Enviar</S.Botao> 

            <S.Inscrevase>Nao possui inscrição ? <S.Linki to="/signup">Inscreva-se</S.Linki></S.Inscrevase>

            </S.Formulario>

    
        </S.ContSignup> 

        </S.Container>

        <Footer/>

        
        </>

    )


}

export default Login