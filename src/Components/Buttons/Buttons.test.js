// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';

import Buttons from './Buttons';

test('renders correctly', () => {
  const tree = renderer.create(<Buttons />).toJSON();
  expect(tree).toMatchSnapshot();
});
