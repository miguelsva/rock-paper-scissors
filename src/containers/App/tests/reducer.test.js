import {
  SET_PLAYER_MOVE,
  START_GAME,
  RESET_GAME
} from '../constants';
import appReducer from '../reducer';

jest.mock('../../../game', () => ({
  getComputerMove: jest.fn(() => 'scissors')
}));

describe('App reducer', () => {
  const initialState = {
    playerMove: null,
    computerMove: null
  };

  it('should return the initial state', () => {
    expect(appReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle Set Player Move', () => {
    const actionMock = {
      type: SET_PLAYER_MOVE,
      move: 'rock'
    };
    const expectedState = {
      playerMove: 'rock',
      computerMove: null
    };
    expect(appReducer(initialState, actionMock)).toEqual(expectedState);
  });

  it('should handle Start Game', () => {
    const actionMock = {
      type: START_GAME
    };
    const expectedState = {
      playerMove: null,
      computerMove: 'scissors'
    };
    expect(appReducer(initialState, actionMock)).toEqual(expectedState);
  });

  it('should handle Reset Game', () => {
    const actionMock = {
      type: RESET_GAME
    };
    expect(appReducer(initialState, actionMock)).toEqual(initialState);
  });
});
