import React from 'react';
import { shallow } from 'enzyme';
import Player from './';

describe('Player', () => {
  const mockProps = {
    move: 'rock',
    onMove: jest.fn()
  };

  let player;

  beforeAll(() => {
    player = shallow(<Player {...mockProps} />);
  });

  it('should select the current move', () => {
    expect(player.find('button').first().hasClass('selected')).toBe(true);
  });

  it('should call onMove on click', () => {
    player.find('button').first().simulate('click');
    expect(mockProps.onMove).toHaveBeenCalledWith('rock');
  });
});
