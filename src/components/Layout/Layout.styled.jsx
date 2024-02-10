import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  border-bottom: solid 1px grey;
  margin-bottom: 20px;
  border-radius: 10px 5px;
  background: linear-gradient(149deg, #f5a300 0%, #ffd98f 42%, #ff428e 72%, #ff1c2f 100%);
    animation: gradient 10s infinite linear; 
    background-size: 400%; 
}

@keyframes gradient {
    0% {
        background-position: 80% 0%;
    }
    50% {
        background-position: 20% 100%;
    }
    100% {
        background-position: 80% 0%;
    }
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 14px;
  margin-left: 10px;
  font-weight: 600;
  font-size: 22px;
  color: #191d1e;

  &:hover {
    color: #e538fc;
  }
`;
