import styled from 'styled-components'
import { AlertTriangleOutline} from '@styled-icons/evaicons-outline/AlertTriangleOutline'


export const Container = styled.div`
    display:flex;
    width: 100%;
    height: 750px;
    justify-content: center;
    align-items: center;



`

export const ContSignup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 400px;
    height: 500px;
    border: 1px solid;
    border-radius: 4%;
    border-color: #f3e6e3;
    


`

export const Formulario = styled.form`
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;


`

export const Divi = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    margin-top: 0px;

    
`
export const Alerta = styled.p`
    color: red;
    text-align: center;
   

`

export const Aviso = styled(AlertTriangleOutline)`
    width: 20px;


`




export const Texto = styled.p`
    font-size: 30px;
    font-family: "Thasadith", sans-serif;

`


export const Inputi = styled.input`
    width:  75%;
    margin: 4px;
    padding: 8px;


`

export const Leibel = styled.label`
    align-self: flex-start;
    margin-left: 33px;
    margin-top: 25px;
    font-family: "Thasadith", sans-serif;


`

export const Botao = styled.button`
    background-color: #6a2c70;
    color: white;
    border: none;
    border-radius: 50px;
    width: 90px;
    padding: 10px;
    font-family: 'Thasadith', sans-serif;
    margin-top: 20px;


`
export const Selecti = styled.select`
    width:  80%;
    margin: 5px;
    padding: 8px;


`

