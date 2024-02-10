import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 24px;
  gap: 24px;
  color: #f0e813;
`;

export const List = styled.ul`
  display: inline-flex;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
  color: #f0e813;
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
  color: #f0e813;
`;

export const LinkInfo = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: yellow;

  &:hover {
    color: #e538fc;
  }
`;

export const Button = styled.button`
padding: 10px 10px;
cursor: pointer;
border-radius: 4px;
border: 3px solid #000000;
color: #000000;
font-weight: 600;
font-size: 20px;
border-radius: 10px;

&:hover {
  color: #e538fc;
  border: 3px solid gold;
}
`;
