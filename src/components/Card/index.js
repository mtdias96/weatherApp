import PropTypes from 'prop-types';
import { CardContainer } from './styles';

export default function Card({ image, infoName, infoWeather }) {
  return (
    <CardContainer>
      <img src={image} alt="" />
      <p>{infoName}</p>
      <span>{infoWeather}</span>
    </CardContainer>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  infoName: PropTypes.string.isRequired,
  infoWeather: PropTypes.string.isRequired,
};
