import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FullStory, { getWindowFullStory } from './index';

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const component = renderer.create(<FullStory org="XXXXX" />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should expect namespace to export', () => {
  const component = renderer.create(
    <FullStory org="XXXXX" namespace="FullStory" />
  );

  expect(getWindowFullStory()).toBeDefined();
});

it('should not update', () => {
  const component = renderer.create(<FullStory org="XXXXX" />);
  const instance = component.getInstance();
  const spy = jest.spyOn(instance, 'render');

  component.update(<FullStory org="YYYYY" />);
  expect(spy).not.toHaveBeenCalled();
});

it('should shutdown on unmount', () => {
  const component = renderer.create(<FullStory org="XXXXX" />);
  const instance = component.getInstance();
  const spy = jest.spyOn(instance, 'componentWillUnmount');

  component.unmount();
  expect(spy).toHaveBeenCalled();
});
