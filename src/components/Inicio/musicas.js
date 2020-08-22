import React from 'react'
import * as S from './styled'
import Cap from '../imagens/capa1 (1).jpg'
import Cap2 from '../imagens/capa1 (2).jpg'
import Cap3 from '../imagens/capa1 (3).jpg'
import Cap4 from '../imagens/capa1 (4).jpg'
import Cap5 from '../imagens/capa1 (5).jpg'
import Cap6 from '../imagens/capa1 (6).jpg' 

function Musicas() {
    return(
       <S.Container>
      <S.Paragrafo1>Escute seus artistas favoritos,<br/> com som de alta definição</S.Paragrafo1><br/>
       <S.Paragrafo2>Mais e 60 milhões de musicas e podcasts</S.Paragrafo2> 
       
       <S.Capa1 src={Cap} />
       <S.Capa2 src={Cap2} />
       <S.Capa3 src={Cap3} />
       <S.Capa4 src={Cap4} />
       <S.Capa5 src={Cap5} />
       <S.Capa6 src={Cap6} />
       

       

       
       
       </S.Container> 


    )


}



export default Musicas