import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Container = styled.div`
    background: linear-gradient(45deg, #5800ff, #5acaff);
    height: 100vh;


`
export const Container404 = styled.div`
    position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('https://images2.imgbox.com/ca/e6/FBr0gE8J_o.png'), #151729; 
    box-shadow: 0 15px 30px rgba(0,0,0,.5);



`



export const Content = styled.div`
    max-width:600px;
    text-align: center;
    font-family: 'Poppins', sans-serif;



`

export const H2 = styled.h2`
font-size: 18vw;
color: #fff;
line-height: 1em;
font-weight: 700;
font-family: 'Poppins', sans-serif;

`

export const H4 = styled.h4`
     position: relative;
    font-size: 1.5em;
    margin-bottom: 20px;
    color: #111;
    background: #fff;
    font-weight: 300;
    padding: 15px 20px;
    display: inline-block;
    font-family: 'Poppins', sans-serif;


`

export const P = styled.p`
    color: #fff;
    font-size: 1.2em;
    font-family: 'Poppins', sans-serif;


`

export const Linki = styled(Link)`
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    background: #ff0562;
    color: #fff;
    text-decoration: none;
    margin-top: 30px;
    border-radius: 25px;
    border-bottom: 4px solid #d00d56;



`


