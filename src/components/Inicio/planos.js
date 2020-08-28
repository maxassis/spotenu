import React from 'react'
import * as S from './styled'


function Planos() {
    return(
        <S.Cont>
            <div> 
            <S.Vantagens>Vantagens de ser Premium</S.Vantagens>
            </div>
        <S.Quadros>       
        <S.Quadro1>
        <S.Premium>Spotenu Free</S.Premium>
        <S.Items><S.GreenCheck/> 60 milhões de faixas</S.Items>
        <S.Items><S.GreenCheck/> Modo aleatorio</S.Items>
        <S.ItemsRiscados><S.RedCross/> Sem publicidade</S.ItemsRiscados>
        <S.ItemsRiscados><S.RedCross/> Pule faixas</S.ItemsRiscados>
        <S.ItemsRiscados><S.RedCross/> Crie playslists</S.ItemsRiscados>
        <S.ItemsRiscados><S.RedCross/> Modo offline</S.ItemsRiscados>
        <S.ItemsRiscados><S.RedCross/> Som Alta Definição</S.ItemsRiscados>

        <S.Botao1><S.Linki to="/signup">Cadastrar-se</S.Linki></S.Botao1>

        </S.Quadro1>

        

        <S.Quadro2>
        <S.Premium>Spotenu Premium</S.Premium>
        <S.Items><S.GreenCheck/> 60 milhões de faixas</S.Items>
        <S.Items><S.GreenCheck/> Modo aleatorio</S.Items>
        <S.Items><S.GreenCheck/> Sem publicidade</S.Items>
        <S.Items><S.GreenCheck/> Pule faixas</S.Items>
        <S.Items><S.GreenCheck/> Crie playslists</S.Items>
        <S.Items><S.GreenCheck/> Modo offline</S.Items>
        <S.Items><S.GreenCheck/> Som Alta Definição</S.Items>
        
        <S.Botao2><S.Linki to="/signup">Assine<br/> Agora</S.Linki></S.Botao2>

        </S.Quadro2>
        </S.Quadros>
        
        
        
        
        </S.Cont>




    )





}


export default Planos