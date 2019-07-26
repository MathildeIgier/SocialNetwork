// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';

import SessionLine from './SessionLine';

test('renders correctly', () => {
  const tree = renderer.create(<SessionLine />).toJSON();
  expect(tree).toMatchSnapshot();
});
