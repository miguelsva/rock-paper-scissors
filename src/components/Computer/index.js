import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Computer = ({ move }) => (
  <div>
    <h3>Computer</h3>
    <div className="computer-move">
      <i className={`fa fa-hand-${move}-o`}/>
    </div>
  </div>
);

Computer.propTypes = {
  move: PropTypes.string
};

export default Computer;