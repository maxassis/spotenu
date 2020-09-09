import React from 'react'
import * as S from './styled'
import Logo from '../imagens/logo.png'



function Footer() {
    return(
        <S.Container>
         <S.Sociais>   
        <S.Titulo><S.Spotenu src={Logo}/></S.Titulo>
        <S.Insta/>
        <S.Face/>
        <S.twit/>
        <S.You/>
         </S.Sociais> 
         
        <S.Tabela>
        <p>Spotenu</p><br/>
        <span>Planos</span>
        <span>Dispositivos</span>
        <span>Download Spotenu</span>
        <span>Ajuda</span>
        </S.Tabela>
        <S.Tabela>
        <p>Explorar</p><br/>
        <span>Mais Ouvidas</span>
        <span>Top Podcasts</span>
        <span>Lançamentos</span>
        <span>Videos</span>
        </S.Tabela>
        <S.Tabela>
        <p>Conta</p><br/>
        <span>Signup</span>
        <span>Resgatar Voucher</span>
        <span>Gerenciar Conta</span>
        <span>Loja</span>
        </S.Tabela>
        <S.Tabela>
        <p>Sobre</p><br/>
        <span>Politica de Privacidade</span>
        <span>Termos e Condiçoes de Uso</span>
        <span>Legal</span>
        <span>Contato</span>
        </S.Tabela>
         
        
        
        </S.Container>




    )




}


export default Footer