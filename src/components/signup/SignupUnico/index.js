import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom"
import * as S from './styled'
import Header from '../../header/index'
import Footer from '../../footer/index'
import { useForm } from "react-hook-form";




function SignupUnico() {
    const { register, errors, handleSubmit } = useForm();
    const [valor, setValor] = useState()
    const history = useHistory()
    

   function onSubmit(data) {
    
    const body = {
        name: data.name,
        nickname: data.nickname,
        email: data.email,
        password: data.password,
        type: data.type,

    }
    console.log(body)

    axios.post('https://localhost:8000/signup', body).then((response) => {
        console.log(response)
        alert("Cadastro Efetuado com Sucesso")
        history.push("/login")
    }).catch(error => {
        console.log(error.response)
    })
  }


    const inputSelect = (event) => {
        setValor(event.target.value)
      } 
              

    return(
        <>
        <Header pagina="Inicio" pagina2="Login" url="/" url2="/login"/>
        <S.Container>
        <S.ContSignup>
            <S.Divi>
            <S.Texto>Cadastro</S.Texto>
            </S.Divi>

            <S.Formulario onSubmit={handleSubmit(onSubmit)}>

            <S.Leibel> Tipo de Conta </S.Leibel>
            <S.Selecti name="type" ref={register({ required: true})} onChange={inputSelect}  >
                <option value=""></option>
                <option value="premium">Premium</option>
                <option value="free">Free</option>
                <option value="banda">Banda</option>
            </S.Selecti>
            {errors.type && "Escolha um plano"}    

            <S.Leibel> Nome </S.Leibel>
            <S.Inputi placeholder="Digite seu nome" name="name" ref={register({ required: true})} />
            {errors.name && "Digite um nome"}

            <S.Leibel> Nickname </S.Leibel>
            <S.Inputi placeholder="Digite seu nickname" name="nickname" ref={register({ required: true})} />
            {errors.nickname && "Digite um nickname"}

            <S.Leibel> Email </S.Leibel>
            <S.Inputi placeholder="Digite seu email" name="email" ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
            {errors.email && "Digite um email valido"}

            {valor==="banda" && <><S.Leibel> Descrição </S.Leibel><S.TextArea></S.TextArea></> }

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

export default SignupUnico