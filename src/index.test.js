import React from 'react';
import renderer from 'react-test-renderer';

import FullStory, { FullStoryAPI, getWindowFullStory } from './index';

beforeEach(() => {
  window['_fs_debug'] = undefined;
  window['_fs_host'] = undefined;
  window['_fs_org'] = undefined;
  window['_fs_namespace'] = undefined;
  window['FS'] = undefined;
});

it('should load', () => {
  renderer.create(<FullStory org="XXXXX" />);

  expect(getWindowFullStory()).toBeDefined();
});

it('needs an org', () => {
  renderer.create(<FullStory />);

  expect(window['_fs_namespace']).toBeUndefined();
});

it('should accept custom namespace', () => {
  renderer.create(<FullStory org="XXXXX" namespace="FullStory" />);

  expect(getWindowFullStory()).toEqual(window[window['_fs_namespace']]);
});

it('should be able to call API', () => {
  renderer.create(<FullStory org="XXXXX" />);

  const userId = 'abc123';
  const data = {
    displayName: 'My user',
    email: 'test@example.com'
  };

  const identifyCall = FullStoryAPI('identify', userId, data);

  expect(identifyCall).toEqual({
    method: 'identify',
    args: [userId, data]
  });
});

it('cannot call API without initializing', () => {
  const userId = 'abc123';
  const data = {
    displayName: 'My user',
    email: 'test@example.com'
  };

  const identifyCall = FullStoryAPI('identify', userId, data);

  expect(identifyCall).toEqual(false);
});

it('should not update', () => {
  const fs = renderer.create(<FullStory org="XXXXX" />);

  fs.update(<FullStory org="YYYYYY" />);

  expect(window['_fs_org']).toBe('XXXXX');
});

// it('cannot unmount if never mounted properly', () => {
//   const fs = renderer.create(<FullStory />);

//   fs.unmount();

//   expect(window[window['_fs_namespace']]).toBeUndefined();
// });

// it('can unmount properly', () => {
//   const fs = renderer.create(<FullStory org="XXXXX" />);

//   fs.unmount();

//   expect(window[window['_fs_namespace']]).toBeUndefined();
// });
