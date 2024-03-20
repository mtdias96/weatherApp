import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: 176px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    flex: 1 0 0;
    align-self: stretch;
  }

  img{
    width: 56px;
    height: 56px;
  }

  h3{
    color: var(--Base-Gray-100, #FAFAFA);
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 140%;
  }

  h4{
    color: var(--Base-Gray-400, #7F7F98);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }
`;
