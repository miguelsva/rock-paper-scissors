import { getComputerMove, getResult } from './';

describe('Game logic', () => {

  let randomValue;
  const mockRandom = () => (randomValue);

  global.Math.random = mockRandom;

  it('should return a random computer move', () => {
    randomValue = 0;
    expect(getComputerMove()).toEqual('rock');

    randomValue = 0.334;
    expect(getComputerMove()).toEqual('paper');

    randomValue = 0.667;
    expect(getComputerMove()).toEqual('scissors');
  });

  it('should return null if required arguments are missing', () => {
    expect(getResult()).toBeNull();
    expect(getResult('rock')).toBeNull();
    expect(getResult(undefined, 'rock')).toBeNull();
  });

  it('should return tie if the moves are equal', () => {
    const result = getResult('rock', 'rock');
    expect(result).toEqual('tie');
  });

  it('should return win if the first move beats the second', () => {
    const result = getResult('rock', 'scissors');
    expect(result).toEqual('win');
  });

  it('should return loss if the second move beats the first', () => {
    const result = getResult('scissors', 'rock');
    expect(result).toEqual('loss');
  });
});