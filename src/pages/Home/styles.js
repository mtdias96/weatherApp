import styled from 'styled-components';
import background from '../../assets/images/background/background.png';

export const Container = styled.section`
  width: 100%;
  height: 1500px;
  background: url(${background}), lightgray 50% / cover no-repeat;
  background-repeat: no-repeat;
  background-size:cover;
  display: flex;
  gap: 50px;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1211px) {
    gap: 54px;
  }
`;

export const InitialContent = styled.div`
  margin-top: 6rem;
  display: flex;
  width: 31.5rem;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;

  @media (max-width: 768px) {
    margin-top: 10rem;
    width: 90%;
    gap: 2rem;
  }
`;

export const InitalContainerText = styled.div`
 h2{
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 20px;
  font-weight: 700;
  line-height: 140%;
  text-align: center;

  span{
    color: ${({ theme }) => theme.colors.blueWhite};
  }
  }

  p{
  padding-top: 8px;
  color: ${({ theme }) => theme.colors.gray[200]};
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  }

  @media (min-width: 768px) {
  h2, span{
    font-size: 32px;
  }
  p{
    font-size: 20px;
  }
  }
`;

export const WeatherContainer = styled.section`
display: flex;
width: 335px;
height: 304px;
justify-content: center;
align-items: center;

@media (min-width: 563px) {
  width: 432px;
  height: 416px;
}
@media (min-width: 768px) {
  width: 532px;
  height: 516px;
}
`;

export const ContainerInput = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 764px ) {
    width: 500px;
  }
  @media (max-width: 560px ) {
    width: 100%;
  }
  button{
    border: transparent;
    img{
      position: absolute;
      top: 18%;
      left: 87%;
      background: '#fff';
      width: 15px;
      height: 25px;
      transform: rotate(90deg);
      cursor: pointer;
    }
  }
`;

export const WeatherContainerInfo = styled.section`
display: flex;
width: 335px;
justify-content: center;
align-items: center;

@media (min-width: 563px) {
  width: 432px;
  height: 416px;
}
@media (min-width: 768px) {
  width: 532px;
  height: 416px;
}
`;

export const ContainerWeather = styled.div`
  @media (min-width: 1213px) {
    margin-top: 24px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 34px;
  }

  @media (max-width: 1211px) {
    display: flex;
    flex-direction: column;
    gap: 54px;
  }
`;
