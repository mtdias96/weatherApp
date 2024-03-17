import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import PropTypes from 'prop-types';
import iconMap from '../../utils/icons';

import {
  BackgroundImage, Container,
  ContainerWeather,
  ImageWeather,
  InfoLocation, InfoWeather,
} from './styles';

export default function WeatherDisplay({
  city, temperature, weatherText, temperatureMin, temperatureMax,
  dateApi, isDay, icon = 1,
}) {
  const date = format(new Date(dateApi), "dd 'de' MMMM 'de' yyyy", { locale: pt });
  const time = format(new Date(dateApi), 'HH:mm:ss');
  const iconTemp = iconMap[icon];

  return (
    <Container>
      <BackgroundImage isDay={isDay}>
        <InfoLocation>
          <h2>
            {city}
            <span>{date}</span>
          </h2>
          <p>{time}</p>
        </InfoLocation>
        <ContainerWeather>
          <InfoWeather>
            <h2>
              {temperature}
              °c
            </h2>
            <h3>
              {temperatureMin}
              °c /
              {' '}
              {temperatureMax}
              °c
            </h3>
            <span>{weatherText}</span>
          </InfoWeather>
          <ImageWeather>
            <img src={iconTemp} alt="logo" />
          </ImageWeather>
        </ContainerWeather>
      </BackgroundImage>
    </Container>
  );
}

WeatherDisplay.propTypes = {
  city: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weatherText: PropTypes.string.isRequired,
  temperatureMin: PropTypes.number.isRequired,
  temperatureMax: PropTypes.number.isRequired,
  dateApi: PropTypes.string.isRequired,
  isDay: PropTypes.bool.isRequired,
  icon: PropTypes.number.isRequired,

};
