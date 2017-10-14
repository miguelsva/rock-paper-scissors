import React from 'react';
import { shallow } from 'enzyme';
import Computer from './';

describe('Computer', () => {

  const mockProps = {
    move: 'rock'
  };

  it('should render the computer move', () => {
    const computer = shallow(<Computer { ...mockProps } />);
    expect(computer.find('i.fa-hand-rock-o')).toHaveLength(1);
  });
});