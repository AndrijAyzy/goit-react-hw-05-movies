import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 12px 14px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #191d1e;
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
  border-radius: 10px;
  outline: none;

  &:hover {
    color: #000000;
    border: 3px solid gold;
  }
`;

export const Button = styled.button`
  padding: 12px 12px;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #000000;
  color: #000000;
  font-weight: 600;
  font-size: 20px;
  border-radius: 10px;

  &:hover {
    color: red;
    border: 3px solid gold;
  }
`;
