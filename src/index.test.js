// TODO: Remember to rename this file and then get the tests passing

import React from 'react';
import renderer from 'react-test-renderer';

import FullStory, { getWindowFullStory } from './index';

it('should expect namespace to export', () => {
  renderer.create(<FullStory org="XXXXX" namespace="FullStory" />);

  console.log(getWindowFullStory());

  expect(getWindowFullStory()).toBeDefined();
});
