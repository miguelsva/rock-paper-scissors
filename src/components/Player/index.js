import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ move, onMove }) => (
  <div>
    <h3>Player</h3>
    <div>Please select your move:</div>
    <button onClick={() => onMove('rock')}>Rock</button>
    <button onClick={() => onMove('paper')}>Paper</button>
    <button onClick={() => onMove('scissors')}>Scissors</button>
  </div>
);

Player.propTypes = {
  move: PropTypes.string,
  onMove: PropTypes.func.isRequired
};

export default Player;