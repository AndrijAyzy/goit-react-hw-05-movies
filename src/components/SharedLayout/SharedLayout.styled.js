import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 20px 30px;
  text-align: left;
  box-shadow: 0px 4px 4px #d3d3d3;
`;

export const StyledNavLink = styled(NavLink)`
font-size: 20px;
margin-right: 50px;
padding: 5px 15px;
border: 1px solid #000000;
border-radius: 10px;
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

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

export const LoadingDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Dot = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #1c85ff;
  animation: ${bounce} 1s infinite ease-in-out;
  animation-delay: ${({ delay }) => delay};
`;
