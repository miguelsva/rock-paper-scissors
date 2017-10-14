import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ value, playerMove, computerMove }) => {

  const getText = (value) => {
    switch (value) {
      case 'tie':
        return {
          title: 'Tie! :|'
        };
      case 'win':
        return {
          title: 'You win! :)',
          info: `${playerMove} beats ${computerMove}`
        }
      case 'loss':
        return {
          title: 'You lost :(',
          info: `${computerMove} beats ${playerMove}`
        }
      default:
        return {};
    }
  }

  const { title, info } = getText(value);
  return (
    <div>
      <h3>{ title }</h3>
      <span>{ info }</span>
    </div>
  );
};

Result.propTypes = {
  value: PropTypes.string,
  playerMove: PropTypes.string,
  computerMove: PropTypes.string
};

export default Result;