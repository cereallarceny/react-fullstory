import React from 'react';
import initFullStory from './fullstory-script';
import initMockFullStory from './mock-fullstory-script';

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

const includeFullStory =
  process.env.NODE_ENV !== 'test' ? initFullStory : initMockFullStory;

export const getWindowFullStory = () => window[window['_fs_namespace']];

export const FullStoryAPI = (fn, ...args) => {
  if (canUseDOM && getWindowFullStory()) {
    return getWindowFullStory()[fn].apply(null, args);
  }

  return false;
};

export const identify = (...args) => {
  return FullStoryAPI('identify', ...args);
};

export const shutdown = (...args) => {
  return FullStoryAPI('shutdown', ...args);
};

export const restart = (...args) => {
  return FullStoryAPI('restart', ...args);
};

export const setUserVars = (...args) => {
  return FullStoryAPI('setUserVars', ...args);
};

export const log = (...args) => {
  return FullStoryAPI('log', ...args);
};

export const getCurrentSessionUrl = (...args) => {
  return FullStoryAPI('getCurrentSessionUrl', ...args);
};

export const event = (...args) => {
  return FullStoryAPI('event', ...args);
};

export const consent = (...args) => {
  return FullStoryAPI('consent', ...args);
};

export const clearUserCookie = (...args) => {
  return FullStoryAPI('clearUserCookie', ...args);
};

export default class FullStory extends React.Component {
  constructor(props) {
    super(props);

    const { org, debug, host, namespace } = props;

    if (!org || !canUseDOM) {
      return;
    }

    if (!getWindowFullStory()) {
      window['_fs_debug'] = debug || false;
      window['_fs_host'] = host || 'fullstory.com';
      window['_fs_org'] = org;
      window['_fs_namespace'] = namespace || 'FS';

      includeFullStory();
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    if (!canUseDOM || !getWindowFullStory()) return false;

    getWindowFullStory().shutdown();

    delete window[window['_fs_namespace']];
    delete window['_fs_debug'];
    delete window['_fs_host'];
    delete window['_fs_org'];
    delete window['_fs_namespace'];
  }

  render() {
    return false;
  }
}
