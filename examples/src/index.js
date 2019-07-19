import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import FullStory, { FullStoryAPI } from 'react-fullstory';
import Cookies from 'js-cookie';

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const App = () => {
  const cookieOrgId = Cookies.get('fullstory-org-id');
  const [orgId, setOrgId] = useState(cookieOrgId);
  const userId = `user_${rand(1, 100000)}`;

  const identifyAs = (userId, data) => {
    FullStoryAPI('identify', userId, data);
  };

  const handleSubmit = event => {
    event.preventDefault();

    Cookies.set('fullstory-org-id', orgId);

    window.location.reload();
  };

  return (
    <div>
      {!cookieOrgId && (
        <>
          <p>
            Start by entering your FullStory organization ID and hitting "Save".
          </p>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Organization ID"
              type="text"
              name="orgId"
              value={orgId}
              onChange={event => setOrgId(event.target.value)}
            />
            <input type="submit" value="Save" />
          </form>
        </>
      )}
      {cookieOrgId && (
        <>
          <p>
            Awesome! FullStory is now tracking... you should open your console
            now.
          </p>
          <FullStory org={cookieOrgId} debug={true} />
          <p>
            If you want to identify yourself as a randomly generated user, do so
            below:
          </p>
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
          <p>
            You can clear your cookies and begin this whole process again as you
            like.
          </p>
        </>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
