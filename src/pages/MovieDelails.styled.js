import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 40px;
`;

export const Button = styled.button`
font-size: 20px;
margin-right: 5px;
padding: 5px 10px;
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
