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

export const App = (props) => {

  const play = () => {
    const {
      onPlay,
      onReset
    } = props;
    onPlay();
    setTimeout(onReset, 2000);
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
      {!!playerMove}
      <Computer
        move={computerMove}
      />
      { gameResult ? 
        <Result
          title={gameResult.title}
          info={gameResult.info}
        />
        :
        <button onClick={play} disabled={!playerMove}>Play</button>
      }
    </div>
  );
};

App.propTypes = {
  playerMove: PropTypes.string,
  computerMove: PropTypes.string,
  gameResult: PropTypes.object,
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
