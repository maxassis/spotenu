import React from 'react'
import * as S from './styled'
import Fundo from '../imagens/fundo.png'


function ImgViolao() {
    return(
        <>
        <S.Violao>
        <S.Imagem src={Fundo} />
        <S.Anuncio> 
        <S.P1>Spotenu Premium</S.P1>
        <S.P2>3 Meses Gratuitos</S.P2>
        <S.P3>A partir de R$ 16,90 ao mes <br/> cancele a qualquer tempo</S.P3>
        <S.BotaoAssinar>ASSINE AGORA</S.BotaoAssinar>
        </S.Anuncio>
        </S.Violao>
        </> 

    )


}

export default ImgViolao