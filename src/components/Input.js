import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  display: flex;
  height: 56px;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  outline: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gray[600]};
  color: ${({ theme }) => theme.colors.gray[100]};

  &::placeholder{
  color: ${({ theme }) => theme.colors.gray[400]};
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  }
`;

export default Input;
