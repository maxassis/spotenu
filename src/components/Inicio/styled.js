import styled from "styled-components";

export const Imagem = styled.img`
  width: 100%;
`;

export const Violao = styled.div`
  max-height: 730px;
  display:flex;
  flex-direction: column;
`;

export const Anuncio = styled.div`
  color: white;
  position: relative;
  bottom: 570px;
  margin-left: 120px;
`;

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