import styled from "styled-components";
import media from 'styled-media-query'
import { Check } from '@styled-icons/boxicons-regular/Check'
import { Cross } from '@styled-icons/entypo/Cross'
import { Link } from 'react-router-dom'



export const Imagem = styled.img`
  width: 100%;
`

export const Violao = styled.div`
  display: flex;
  justify-content: center;
  height: 730px;
  width: 100%;
  display:flex;
  flex-direction: column;
  background-image: url("https://images2.imgbox.com/b4/d2/ysVbBRq1_o.png");
  
  ${media.lessThan("medium")`
  background-position: center;
  
  `}
`

export const Anuncio = styled.div`
  color: white;
  margin-left: 110px;
  margin-bottom: 50px;

  ${media.lessThan("medium")`
    margin-left: 40px;
  
  `}
  
`

export const P1 = styled.p`
  font-family: "Thasadith", sans-serif;
  font-size: 40px;
  margin-bottom: 30px;
`;

export const P2 = styled.p`
  font-family: "Thasadith", sans-serif;
  font-size: 70px;
`;
export const P3 = styled.p`
  font-family: "Thasadith", sans-serif;
  font-size: 20px;
  margin-top: 30px;
`;

export const BotaoAssinar = styled.button`
  border-radius: 50px;
  width: 240px;
  padding: 25px;
  margin-top: 20px;
  border: none;
  font-family: "Thasadith", sans-serif;
  font-size: 15px;
  background-color: #fe91ca;
  
`;




// Musicas

export const Container = styled.div`
  display: grid;
  grid-template: auto auto / auto auto auto auto; 
  margin-left: 30px;
  max-width: 100%;
  height: 650px;

  ${media.lessThan("large")`
  grid-gap: 15px;
  height: 750px;
  margin: auto;
  justify-content: center;
  align-content: center;
  grid-template-areas: "a1 a1 a1 a1"
                       "a2 a2 a3 a3"        
                       "a4 a4 a5 a5"    
  `}

  ${media.lessThan("small")`
  height: 620px;
  grid-gap: 5px;
  `}  

`;

export const Paragrafo1 = styled.p`
    display: grid;
    position: relative;
    align-items: flex-end;
    bottom: 15px;
    font-family: "Thasadith", sans-serif;
    font-size: 38px;
    font-weight: bold;
    align-self: auto;
    order: 1;
    grid-column-start: 1;
    grid-column-end: 2;

    ${media.lessThan("large")`
    grid-area: a1;
    text-align: center;
  `} 

  ${media.lessThan("small")`
    font-size: 28px;
  `} 
`;

export const Paragrafo2 = styled.p`
    font-family: "Thasadith", sans-serif;
    font-size: 20px;
    order: 5;
    text-align: left;
    padding-left: 40px;

    ${media.lessThan("large")`
    display: none;
  `}
    
    `

export const Capa1 = styled.img`
    order: 2;
  
    ${media.lessThan("large")`
    grid-area: a2;
  `}

  ${media.lessThan("small")`
      width: 50vw;
      align-self: center;
      justify-self: center;
  `} 
    
`

export const Capa2 = styled.img`
    order: 3;

    ${media.lessThan("large")`
    grid-area: a3;
  `}

  ${media.lessThan("small")`
      width: 50vw;
      align-self: center;
      justify-self: center;
  `} 
  
`
export const Capa3 = styled.img`
    order: 4;

    ${media.lessThan("large")`
    display: none;
    
  `}
`
export const Capa4 = styled.img`
    order: 6;

    ${media.lessThan("large")`  
    grid-area: a4;
  `}

  ${media.lessThan("small")`
      width: 50vw;
      align-self: center;
      justify-self: center;
  `} 
`
export const Capa5 = styled.img`
    order: 7;

    ${media.lessThan("large")`
    display: none;
  `}
`
export const Capa6 = styled.img`
    order: 8;

    ${media.lessThan("large")`
    grid-area: a5;
  `}

  ${media.lessThan("small")`
      max-width: 50vw;
      align-self: center;
      justify-self: center;
  `} 
`



// PLANOS


export const Cont = styled.div`
    max-width: 100%;
    height: 600px; 

    ${media.lessThan("medium")`
    height: 1040px;
  
  `}
  
`

export const Quadros = styled.div`
    display: flex;
    justify-content: space-around;

  ${media.lessThan("medium")`
    flex-direction: column;
    align-items: center;
  
  `}
    
`

export const Quadro1 = styled.div`
    width: 300px;
    height: 400px;
    border:solid 1px;
    border-color: #ebecf1;
    border-radius: 4%;
    margin-left: 80px;

    ${media.lessThan("medium")`
    margin-left: 0px;
  
  `}
    
  
    
`
export const Quadro2 = styled.div`
    width: 300px;
    height: 400px;
    border:solid 1px;
    border-radius: 4%;
    border-color: #6a2c70; ;
    box-shadow: 0 0 0.1em #6a2c70; 
    margin-right: 80px;


    ${media.lessThan("medium")`
    margin-top: 25px;
    margin-right: 0px;
  
  `} 
`


export const Vantagens = styled.p`
    text-align: center;
    font-size: 40px;
    font-family: "Thasadith", sans-serif;
    padding-top: 35px;
    padding-bottom: 45px;
    
`

export const Premium = styled.p`
    text-align:center;
    font-family: "Thasadith", sans-serif;
    font-size: 22px;
    padding-top: 30px;
    padding-bottom: 30px;
    
`

export const GreenCheck = styled(Check)`
    color: green;
    width: 25px;
`

export const RedCross = styled(Cross)`
  color: red;
  width: 25px;
`

export const Items = styled.p`
  margin-left: 20px;
  font-family: 'Thasadith', sans-serif;
  font-size: 15px;
`
export const ItemsRiscados = styled.p`
  text-decoration: line-through;
  margin-left: 20px;
  font-family: 'Thasadith', sans-serif;
  font-size: 15px;
`

export const Botao2 = styled.button`
   

    background-color: #6a2c70;
    color: #0000;
    border: none;
    border-radius: 50px;
    width: 150px;
    padding: 10px;
    font-family: 'Thasadith', sans-serif; ;
    margin-left: 75px;
    margin-top: 50px;
    font-size: 15px;
    box-shadow: 0 0 1em #6a2c70; 

  
`


export const Botao1 = styled.button`
    background-color: #e8ded2;
    color: black;
    border-radius: 50px;
    border: 1px solid;
    border-color: #e8ded2; 
    width: 150px;
    padding: 10px;
    font-family: 'Thasadith', sans-serif;
    margin-left: 75px;
    margin-top: 50px;
    font-size: 15px;
    
`
export const Linki = styled(Link)`
    text-decoration: none;
    color: black;
`

export const Linki2 = styled(Link)`
    text-decoration: none;
    color: white;
`


// MOBILE

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffe0f7;
  max-width: 100%;
  height: 650px;

  ${media.lessThan("large")`
    flex-direction: column-reverse;
    height: 750px;
    justify-content: center;
    align-content: center;
  `}
`

export const Imagens = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 120px;

  ${media.between("medium", "large")`
  margin-right: auto;
  margin-left: auto;
  `}

  ${media.lessThan("medium")`
  margin-right: auto;
  margin-left: auto;
    
  
    
  `}
  
`

export const Tela1 = styled.img`
      margin-left: 40px;

     ${media.lessThan("medium")`
     display:none;
       
           
  
  `} 
  
  `

  export const Tela2 = styled.img`
      margin-left: 40px;

     ${media.lessThan("medium")`
     margin-left: auto;
     margin-right: auto;
       
       
          
  `} 
`

export const Playlists = styled.div`
      margin: auto;

      ${media.lessThan("large")`
      margin-top: 20px;
      margin-bottom: 50px;
      margin-right: auto;
  
  `} 
 
`

export const P = styled.p`
  text-align: center;
  font-size: 38px;
  font-family: 'Thasadith', sans-serif;
`
export const PP = styled.p`
  margin-top: 15px;
  text-align: center;
  font-size: 20px;
  font-family: 'Thasadith', sans-serif;

  ${media.lessThan("large")`
    font-size: 15px;
  
  `}
`




