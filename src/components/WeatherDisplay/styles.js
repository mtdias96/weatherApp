import styled from 'styled-components';
import day from '../../assets/images/background/day.png';
import nigth from '../../assets/images/background/nigth.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => (props.isDay ? day : nigth)});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
`;

export const ContainerWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoLocation = styled.div`
  padding: 20px 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  h2{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: ${({ theme }) => theme.colors.gray[100]};
    text-align: center;
    font-weight: 700;
    line-height: 140%;
  }

  span{
    display: block;
    color: ${({ theme }) => theme.colors.gray[100]};
    font-size: 12px;
    font-weight: 400;
    line-height: 140%;
  }

  p{
    color: ${({ theme }) => theme.colors.gray[100]};
    font-size: 12px;
    font-weight: 700;
    line-height: 140%;
  }

  @media (min-width: 769px) {
    p{
      font-size: 20px;
    }
  }
`;

export const InfoWeather = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  h2{
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    font-size: 48px;
    font-weight: 800;
    line-height: 120%;
  }
  h3{
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: 700;
    line-height: 140%;
  }
  span{
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    margin-top: 4px;
    font-weight: 400;
    line-height: 140%;
  }
`;

export const ImageWeather = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  width: 160px;
  height: 160px;
`;
