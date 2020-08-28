import React from 'react'
import * as S from './styled'
import Img1 from '../imagens/preview.jpg'
import Img2 from '../imagens/previeww.jpg'


function Mobile() {
    return(
        <S.Wrapper>

         <S.Imagens>  
        <S.Tela src={Img1} />
        <S.Tela src={Img2} />
         </S.Imagens> 

         <S.Playlists>

         <S.P>Playlists Selecionadas</S.P>
        <S.PP>Ouça playlists compiladas por artistas que você ama.<br/> 
        Confira também as nossas playlists originais 
        selecionadas <br/>por nossa equipe de especialistas do SPOTENU.</S.PP>
        

         </S.Playlists>   



        </S.Wrapper>



    )




}



export default Mobile