// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';

import InputForm from './InputForm';

test('renders correctly', () => {
  const tree = renderer.create(<InputForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
