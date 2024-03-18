import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 1px;
  border-radius: 16px;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.40);

  h2{
    background: var(--Base-Gray-500, #3B3B54);
    display: flex;
    padding: 20px;
    align-items: flex-start;
    align-self: stretch;
    color: var(--Base-Gray-100, #FAFAFA);
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

`;
