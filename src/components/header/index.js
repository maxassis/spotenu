import React from 'react'
import * as S from './styled'
import Logo from '../imagens/logo.png'


function Header(props) {
    return(
    <div>
        <S.Container>
        <S.Titulo><S.Linki3 to="/"><S.Spotenu src={Logo}/></S.Linki3></S.Titulo>
        <S.Botao1><S.Linki to={props.url}>{props.pagina}</S.Linki></S.Botao1>
        <S.Botao2><S.Linki2 to={props.url2}>{props.pagina2}</S.Linki2></S.Botao2>
        </S.Container>
    
    
    </div>
    )

}

export default Header