import styled from 'styled-components';

export const Container = styled.section`
  @media (min-width: 1217px) {
    margin-top: 16px;
  }
  padding-bottom: 18px;
  margin-top: 36px;
  display: flex;
  height: 176px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 18px;
  background: var(--Base-Gray-800, #16161F);
`;

export const CardContainer = styled.div`
  width: 100%;

  div{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-bottom: none;

    img{
      width: 56px;
      height: 56px;
    }
  }

`;
