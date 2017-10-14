import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  setPlayerMove,
  startGame,
  resetGame
} from './actions';
import {
  selectPlayerMove,
  selectComputerMove,
  selectGameResult
} from './selectors';
import {
  Player,
  Computer,
  Result
} from '../../components';
import './styles.css';
const delay = 3000;

export const App = (props) => {

  const play = () => {
    const {
      onPlay,
      onReset
    } = props;
    onPlay();
    setTimeout(onReset, delay);
  }

  const {
    playerMove,
    computerMove,
    onPlayerMove,
    gameResult
  } = props;

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Rock, Paper, Scissors</h1>
      </header>
      <Player
        move={playerMove}
        onMove={onPlayerMove}
      />
      <Computer
        move={computerMove}
      />
      { gameResult ? 
        <Result
          value={gameResult}
          playerMove={playerMove}
          computerMove={computerMove}
        />
        :
        <button
          onClick={play}
          disabled={!playerMove}
          className="app-play">
          Play!
        </button>
      }
    </div>
  );
};

App.propTypes = {
  playerMove: PropTypes.string,
  computerMove: PropTypes.string,
  gameResult: PropTypes.string,
  onPlayerMove: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  playerMove: selectPlayerMove(),
  computerMove: selectComputerMove(),
  gameResult: selectGameResult()
});

const mapDispatchToProps = dispatch => ({
  onPlayerMove: (move) => dispatch(setPlayerMove(move)),
  onPlay: () => dispatch(startGame()),
  onReset: () => dispatch(resetGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
