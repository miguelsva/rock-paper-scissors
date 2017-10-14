import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../';

describe('App', () => {
  const mockProps = {
    playerMove: null,
    computerMove: null,
    gameResult: null,
    onPlayerMove: jest.fn(),
    onPlay: jest.fn(),
    onReset: jest.fn()
  };
  let app;

  beforeAll(() => {
    app = shallow(<App { ...mockProps } />);
  });

  it('should render the play button on game start', () => {
    app = shallow(<App { ...mockProps } />);
    expect(app.find('button')).toHaveLength(1);
    expect(app.find('Result')).toHaveLength(0);
  });

  it('should render the result on game end', () => {
    app = shallow(<App { ...mockProps } gameResult='tie' />);
    expect(app.find('Result')).toHaveLength(1);
    expect(app.find('button')).toHaveLength(0);
  });
});
