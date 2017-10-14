import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Player = ({ move, onMove }) => (
  <div className="player">
    <h3>Player</h3>
    <div className="player-info">Please select your move:</div>
    <button onClick={() => onMove('rock')} disabled={!!move} className={move === 'rock' ? 'selected' : ''}>
      <i className="fa fa-hand-rock-o"/>
    </button>
    <button onClick={() => onMove('paper')} disabled={!!move} className={move === 'paper' ? 'selected' : ''}>
      <i className="fa fa-hand-paper-o"/>
    </button>
    <button onClick={() => onMove('scissors')} disabled={!!move} className={move === 'scissors' ? 'selected' : ''}>
      <i className="fa fa-hand-scissors-o"/>
    </button>
  </div>
);

Player.propTypes = {
  move: PropTypes.string,
  onMove: PropTypes.func.isRequired
};

export default Player;