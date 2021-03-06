import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  justify-content: center;
  align-items: center;
`;

export const ContSignup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 400px;
  border: none;
`;

export const Formulario = styled.form`
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

export const Divi = styled.div`
  margin-bottom: 20px;
  margin-top: 35px;
`;

export const Texto = styled.p`
  font-size: 30px;
  font-family: "Thasadith", sans-serif;
`;

export const Inputi = styled.input`
  width: 75%;
  margin: 4px;
  padding: 8px;
`;

export const Leibel = styled.label`
  align-self: flex-start;
  margin-left: 33px;
  margin-top: 15px;
  font-family: "Thasadith", sans-serif;
`;

export const Botao = styled.button`
  background-color: #6a2c70;
  color: white;
  border: none;
  border-radius: 50px;
  width: 90px;
  padding: 10px;
  font-family: "Thasadith", sans-serif;
  margin-top: 20px;
`;
export const Selecti = styled.select`
  width: 80%;
  margin: 5px;
  padding: 8px;
`;

export const Inscrevase = styled.p`
  font-family: "Thasadith", sans-serif;
  margin-top: 20px;
`;

export const Linki = styled(Link)`
  color: #6a2c70;
`;
