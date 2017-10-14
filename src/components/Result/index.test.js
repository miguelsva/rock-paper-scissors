import React from 'react';
import { shallow } from 'enzyme';
import Result from './';

describe('Result', () => {
  const mockProps = {
    value: 'win',
    playerMove: 'rock',
    computerMove: 'scissors'
  };

  let result;

  beforeAll(() => {
    result = shallow(<Result { ...mockProps } />);
  });

  it('should render the result title', () => {
    expect(result.find('h3').text()).toEqual('You win! :)');
  });

  it('should render the result info', () => {
    expect(result.find('span').text()).toEqual('rock beats scissors');
  });
});
