import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  margin-right: 15px;
  font-size: 16px;
`;

export const Button = styled.button`
font-size: 20px;
margin-right: 5px;
padding: 5px 15px;
border: 1px solid #000000;
border-radius: 5px;
background-color: #626466;
transition: all 0.2s ease-in-out;
text-decoration: none;
color: #ffffff;

&:hover,
&:focus {
  background-color: #ede207;
  color: #000000;
  box-shadow: #ede207;
}
`;

