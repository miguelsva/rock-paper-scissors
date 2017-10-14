import React from 'react';
import { shallow } from 'enzyme';
import Player from './';

describe('Player', () => {
  const mockProps = {
    move: null,
    onMove: jest.fn()
  };

  let player;

  beforeAll(() => {
    player = shallow(<Player {...mockProps} />);
  });

  it('should call onMove on click', () => {
    player.find('button').forEach((button) => {
      button.simulate('click');
      expect(mockProps.onMove).toHaveBeenCalledWith('rock');
    });
  });
});