// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';

import Ranking from './Ranking';

test('renders correctly', () => {
  const tree = renderer.create(<Ranking />).toJSON();
  expect(tree).toMatchSnapshot();
});
