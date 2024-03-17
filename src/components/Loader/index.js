import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Overlay } from './styles';

function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }
  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    document.getElementById('loader-root'),
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
