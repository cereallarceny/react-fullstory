import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import FullStory, { FullStoryAPI } from './';

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const stories = storiesOf('React Fullstory', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  // You must create a .env file and add this variable
  const org = process.env.ORG_ID;

  const userId = text(
    'Sample user id (FS.identify)',
    `user_${rand(1, 100000)}`
  );

  const identifyAs = (userId, data) => {
    FullStoryAPI('identify', userId, data);
  };

  return (
    <>
      <FullStory org={org} debug={true} />
      <button
        onClick={() =>
          identifyAs(userId, {
            displayName: `Test user ${userId}`,
            email: `test_${userId}@example.com`,
            havingFun: true
          })
        }
      >
        Identify {userId}
      </button>
    </>
  );
});
