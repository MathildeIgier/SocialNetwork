// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';

import Card from './Card';

test('renders correctly', () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});
