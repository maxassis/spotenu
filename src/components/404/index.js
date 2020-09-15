import React from 'react'
import * as S from './styled'



function Page404(){
    return(
        <>
        <S.Container>
        <S.Container404>   
            
        <S.Content>
            <S.H2>404</S.H2>
            <S.H4>Opps! Pagina não Encontrada</S.H4>
            <S.P>A pagina que você esta procurando não existe.</S.P>
            <S.Linki to="/">Volte para a Home</S.Linki>
         </S.Content>
         </S.Container404> 
        </S.Container>
        
        </>

    )

} 

export default Page404