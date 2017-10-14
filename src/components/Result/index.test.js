import React from 'react';
import { shallow } from 'enzyme';
import Result from './';

describe('Result', () => {
  const mockProps = {
    value: 'win',
    playerMove: 'rock',
    computerMove: 'scissors'
  };

  it('should render the result title', () => {
    const result = shallow(<Result { ...mockProps } />);
    expect(result.find('h3').text()).toEqual('You win! :)');
  });

  it('should render the result info', () => {
    const result = shallow(<Result { ...mockProps } />);
    expect(result.find('span').text()).toEqual('rock beats scissors');
  });
});