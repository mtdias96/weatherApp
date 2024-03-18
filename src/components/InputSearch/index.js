import PropTypes from 'prop-types';
import { Container } from './styles';

export default function InputSearch({ cityName1, cityName2 }) {
  return (
    <Container>
      <h2>{cityName1}</h2>
      <h2>{cityName2}</h2>
    </Container>
  );
}

InputSearch.propTypes = {
  cityName1: PropTypes.string.isRequired,
  cityName2: PropTypes.string.isRequired,
};
