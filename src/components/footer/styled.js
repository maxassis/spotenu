import styled from 'styled-components'
import media from "styled-media-query"
import {Instagram} from '@styled-icons/remix-fill/Instagram'
import {Twitter} from '@styled-icons/entypo-social/Twitter'
import {Facebook} from '@styled-icons/fa-brands/Facebook'
import {Youtube} from '@styled-icons/boxicons-logos/Youtube'


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-around;
    max-width: 100%;
    height: 350px; 
    background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);

    ${media.lessThan("medium")`
        display: grid;
        grid-template-area: 1fr 1fr 1fr / 1fr 1fr;
        height: 100%;
        

  `}



`

export const Titulo = styled.p`
    font-size: 30px;
    text-align: center;

    ${media.lessThan("medium")`
        display: none;
        

  `}


`


export const Tabela = styled.div`
    display:block;

    p{
        display: block;
        font-weight: bold;
        font-size: 20px;
        font-family: 'Thasadith', sans-serif;
        color: #6a2c70;
    }
    spam{
        display:block;
        font-size: 16px;
        padding: 10px 0 10px 0;
        font-family: 'Thasadith', sans-serif;
    }

    ${media.lessThan("medium")`
        margin-top: 20px;
        

  `}




`

export const Insta = styled(Instagram)`
    color: #6a2c70; 
    width: 32px;
    margin-top: 55px;

   

`

export const Face = styled(Facebook)`
    color: #6a2c70; 
    width: 32px;
    margin-top: 55px;

`
export const twit = styled(Twitter)`
    color: #6a2c70; 
    width: 32px;
    margin-top: 55px;

`
export const You = styled(Youtube)`
    color: #6a2c70; 
    width: 32px;
    margin-top: 55px;

`

export const Sociais = styled.div`

${media.lessThan("medium")`
        margin-bottom: 20px;
        

  `}


`