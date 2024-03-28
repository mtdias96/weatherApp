import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import PropTypes from 'prop-types';
import iconMap from '../../utils/icons';
import Card from '../Card';
import { CardContainer, Container } from './styles';

export default function WeatherNextDays({ isNextDays }) {
  const formatDate = (date) => {
    const dayOfWeek = format(new Date(date), 'EEE', { locale: pt });
    return dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1).toLowerCase();
  };
  return (
    <Container>
      {isNextDays.map((days) => (
        <CardContainer>
          <Card
            image={iconMap[days.Day.Icon]}
            infoWeather={days.Temperature.Maximum.Value}
            infoName={formatDate(days.Date)}
          />
        </CardContainer>
      ))}
    </Container>
  );
}

WeatherNextDays.propTypes = {
  isNextDays: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.any,
  ]).isRequired,
};
