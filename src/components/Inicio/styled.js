import styled from "styled-components";
import { Check } from '@styled-icons/boxicons-regular/Check'
import { Cross } from '@styled-icons/entypo/Cross'



export const Imagem = styled.img`
  width: 100%;
`;

export const Violao = styled.div`
  display: flex;
  justify-content: center;
  height: 730px;
  width: 100%;
  display:flex;
  flex-direction: column;
  background-image: url("https://images2.imgbox.com/01/1b/cBG6gceO_o.png")
`;

export const Anuncio = styled.div`
  color: white;
  margin-left: 110px;
  margin-bottom: 50px;

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
  height: 600px;
`;

export const Paragrafo1 = styled.p`
    display: grid;
    position: relative;
    align-items: flex-end;
    bottom: 20px;
    font-family: "Thasadith", sans-serif;
    font-size: 38px;
    font-weight: bold;
    align-self: auto;
    order: 1;
    grid-column-start: 1;
    grid-column-end: 2;

`;

export const Paragrafo2 = styled.p`
    font-family: "Thasadith", sans-serif;
    font-size: 20px;
    order: 5;
    text-align: left;
    padding-left: 40px;
    

    `

export const Capa1 = styled.img`
    order: 2;

`

export const Capa2 = styled.img`
    order: 3;

`
export const Capa3 = styled.img`
    order: 4;

`
export const Capa4 = styled.img`
    order: 6;

`
export const Capa5 = styled.img`
    order: 7;

`
export const Capa6 = styled.img`
    order: 8;

`



// PLANOS


export const Cont = styled.div`
    max-width: 100%;
    height: 600px;
    
`

export const Quadros = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr

`

export const Quadro1 = styled.div`
    width: 300px;
    height: 400px;
    margin: auto;
    border:solid 1px;
    border-color: #ebecf1;
    margin-right: 100px;
    border-radius: 4%;
    

`
export const Quadro2 = styled.div`
    width: 300px;
    height: 400px;
    margin-left: 100px;
    border:solid 1px;
    border-radius: 4%;
    border-color: #fe91ca;
    box-shadow: 0 0 1em #fe91ca;



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
    background-color: #fe91ca;
    color: white;
    border: none;
    border-radius: 50px;
    width: 150px;
    padding: 10px;
    font-family: 'Thasadith', sans-serif;
    margin-left: 75px;
    margin-top: 50px;
    font-size: 15px;
    box-shadow: 0 0 1em #fe91ca;
    
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