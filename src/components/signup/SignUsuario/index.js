import React from 'react'
import * as S from './styled'
import Header from '../../header/index'
import Footer from '../../footer/index'
import { useForm } from "react-hook-form";



function SignupUsuario() {
    const { register, errors, handleSubmit } = useForm();
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
            <S.Inputi placeholder="Digite seu nome" name="name" ref={register({ required: true})} />
            {errors.name && "Digite um nome"}

            <S.Leibel> Nickname </S.Leibel>
            <S.Inputi placeholder="Digite seu nickname" name="nickname" ref={register({ required: true})} />
            {errors.nickname && "Digite um nickname"}

            <S.Leibel> Email </S.Leibel>
            <S.Inputi placeholder="Digite seu email" name="email" ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
            {errors.email && "Digite um email valido"}

            <S.Leibel> Plano </S.Leibel>
            <S.Selecti name="plano" ref={register({ required: true})} >
                <option value=""></option>
                <option value="premim">Premium</option>
                <option value="free">Free</option>
            </S.Selecti>
            {errors.plano && "Escolha um plano"}

            <S.Leibel> Senha </S.Leibel>
            <S.Inputi label="password" placeholder="Digite uma senha" name="password" type="password" ref={register({ required: true, minLength: 8})} />
            {errors.password && "Digite uma senha com no minimo 8 caracteres"}

            <S.Botao type="submit">Enviar</S.Botao> 

            </S.Formulario>

    
        </S.ContSignup> 

        </S.Container>

        <Footer/>

        </>


    )




}

export default SignupUsuario