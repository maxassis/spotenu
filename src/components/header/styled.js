import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-column: 1fr 1fr 1fr;
    grid-row: 1fr 1fr 1fr;
    height: 80px;
    align-items: center;
    box-shadow: 0 0 0.3em #fe91ca;


`

export const Titulo = styled.p`
    display: grid;
    color: black;
    font-size: 25px;
    grid-column-start: 2; 
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end:2; 
   
`

export const Botao1 = styled.button`
    display: block;
    margin-left: auto;
    border-radius: 50px;
    border: 2px solid;
    border-color: #6a2c70; 
    width: 90px;
    padding: 10px;
    background-color: white;
    color: #6a2c70;
    font-family: 'Thasadith', sans-serif;
    grid-column-start: 3; 
    grid-column-end: 4; 
    
`

export const Botao2 = styled.button`
    background-color: #6a2c70;
    color: white;
    border: none;
    border-radius: 50px;
    width: 90px;
    padding: 10px;
    font-family: 'Thasadith', sans-serif;
    grid-column-start: 4; 
    grid-column-end: 5; 
    margin-left: 10px;
    

`
