import React from 'react';
import { shallow } from 'enzyme';
import Computer from './';

describe('Computer', () => {
  it('renders without crashing', () => {
    shallow(<Computer />);
  });
});