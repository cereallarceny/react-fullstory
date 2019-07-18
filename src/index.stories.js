import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import FullStory, { FullStoryAPI } from './';

const stories = storiesOf('React Fullstory', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const org = text('Org ID', 'XXXXX');
  const userId = text('Sample user id (FS.identify)', 'abc123');

  const identifyAs = (userId, data) => {
    FullStoryAPI('identify', userId, data);
  };

  return (
    <div>
      <FullStory org={org} />
      <button onClick={() => identifyAs(userId, { havingFun: true })}>
        Identify user {userId}
      </button>
    </div>
  );
});
