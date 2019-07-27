// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';

import FormContainer from './FormContainer';

test('renders correctly', () => {
  const tree = renderer.create(<FormContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
