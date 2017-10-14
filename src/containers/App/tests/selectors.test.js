import {
  selectPlayerMove,
  selectComputerMove,
  selectGameResult
} from '../selectors';

jest.mock('../../../game', () => ({
  getResult: jest.fn(() => 'win')
}));

describe('App selectors', () => {
  const mockState = {
    app: {
      playerMove: 'rock',
      computerMove: 'scissors'
    }
  };

  it('should select the player move', () => {
    expect(selectPlayerMove()(mockState)).toEqual(mockState.app.playerMove);
  });

  it('should select the computer move', () => {
    expect(selectComputerMove()(mockState)).toEqual(mockState.app.computerMove);
  });

  it('should select the game result', () => {
    expect(selectGameResult()(mockState)).toEqual('win');
  });
});