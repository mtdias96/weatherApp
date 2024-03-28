import iconMap from '../../utils/icons';
import Card from '../Card';
import { CardContainer, Container } from './styles';

export default function WeatherNextDays() {
  const iconTemp = iconMap[8];
  return (
    <Container>
      <CardContainer>
        <Card image={iconTemp} infoWeather="52c" infoName="teste" />
      </CardContainer>
      <CardContainer>
        <Card image={iconTemp} infoWeather="52c" infoName="teste" />
      </CardContainer>
      <CardContainer>
        <Card image={iconTemp} infoWeather="52c" infoName="teste" />
      </CardContainer>
      <CardContainer>
        <Card image={iconTemp} infoWeather="52c" infoName="teste" />
      </CardContainer>
      <CardContainer>
        <Card image={iconTemp} infoWeather="52c" infoName="teste" />
      </CardContainer>

    </Container>
  );
}
