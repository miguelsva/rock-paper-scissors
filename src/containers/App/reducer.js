import {
  SET_PLAYER_MOVE,
  START_GAME,
  RESET_GAME
} from './constants';
import { getComputerMove } from '../../game';

const initialState = {
  playerMove: null,
  computerMove: null
};

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PLAYER_MOVE:
    return { ...state, playerMove: action.move };
    case START_GAME: {
      const computerMove = getComputerMove();
      return { ...state, computerMove };
    }
    case RESET_GAME:
      return { ...state, ...initialState };
    default:
      return state;
  }
};

export default appReducer;