// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';

import Blank from './Blank';

test('renders correctly', () => {
  const tree = renderer.create(<Blank />).toJSON();
  expect(tree).toMatchSnapshot();
});
