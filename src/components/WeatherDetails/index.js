import PropTypes from 'prop-types';
import nuvem from '../../assets/images/icons/phosporIcons/nuvem.png';
import sum from '../../assets/images/icons/phosporIcons/sum.png';
import temperature from '../../assets/images/icons/phosporIcons/temperature.png';
import vento from '../../assets/images/icons/phosporIcons/vento.png';
import water from '../../assets/images/icons/phosporIcons/water.png';

import Card from '../Card';
import { Container } from './styles';

export default function WeatherDetails({
  thermalSensation, probability, windSpeed, humidity, UVIndex,
}) {
  return (
    <Container>
      <Card
        image={temperature}
        infoName="Sensação térmica"
        infoWeather={`${thermalSensation}°c`}
      />
      <Card
        image={nuvem}
        infoName="Probabilidade de chuva"
        infoWeather={`${probability}%`}
      />
      <Card
        image={vento}
        infoName="Velocidade do vento"
        infoWeather={`${windSpeed}km/h`}
      />
      <Card
        image={water}
        infoName="Umidade do ar"
        infoWeather={`${humidity}%`}
      />
      <Card
        image={sum}
        infoName="Ìndice UV"
        infoWeather={UVIndex}
      />
    </Container>
  );
}

WeatherDetails.propTypes = {
  thermalSensation: PropTypes.number.isRequired,
  probability: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  UVIndex: PropTypes.number.isRequired,
};
