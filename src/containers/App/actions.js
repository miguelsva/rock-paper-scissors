import {
  SET_PLAYER_MOVE,
  START_GAME,
  RESET_GAME
} from './constants';

export const setPlayerMove = (move) => ({
  type: SET_PLAYER_MOVE,
  move
});

export const startGame = () => ({
  type: START_GAME
});

export const resetGame = () => ({
  type: RESET_GAME
});