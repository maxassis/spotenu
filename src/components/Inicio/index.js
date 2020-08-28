import React from 'react'
import Header from '../header'
import ImgViolao from './violao'
import Musicas from './musicas'
import Footer from '../footer'
import Planos from './planos'
import Mobile from './mobile'




function Inicio() {
    return(
        <>
        <Header pagina="Login" pagina2="Signup" url="/login" url2="/signup"/>
        <ImgViolao/>
        <Musicas/>
        <Mobile/>
        <Planos/>
        <Footer/> 
        </> 


    )



}

export default Inicio