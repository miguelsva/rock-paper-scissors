import React from 'react';
import PropTypes from 'prop-types';

const Computer = ({ move }) => (
  <div>
    <h3>Computer</h3>
    <button>{move || '???'}</button>
  </div>
);

Computer.propTypes = {
  move: PropTypes.string
};

export default Computer;