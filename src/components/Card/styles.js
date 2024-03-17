import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  padding: 16px 0px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid var(--Base-Gray-700, #252532);

  @media (min-width: 566px) {
    padding: 24px 0px;
  }

img{
  width: 24px;
  height: 24px;
}
p{
  color: ${({ theme }) => theme.colors.gray[200]};
  font-size: 14px;
  font-weight: 700;
  line-height: 140%;

  @media (min-width: 768px) {
    font-size: 18px;
  }
}

span{
  color: ${({ theme }) => theme.colors.gray[100]};
  font-weight: 700;
  line-height: 140%;
  border-bottom: ${({ theme }) => theme.colors.gray[700]};

  @media (min-width: 768px) {
    font-size: 20px;
  }
}

`;
