# react-fullstory
A component to run FullStory in your React application. This is safe to use both on the client and in a server-rendered environment. If you run into issues, please submit an issue. Pull requests are also welcome!

## Installation
```bash
npm i react-fullstory --save
```

## Usage
Include the `<FullStory />` component somewhere in your application - probably in the top-most component.

```js
import { Component } from 'react';
import FullStory from 'react-fullstory';

export class App extends Component {
  render () {
    return (
      <div className="app">
        <FullStory org="ORG_ID" />
      </div>
    );
  }
}
```

This loads FullStory at the creation of the component and places the script appropriately in the page. This library allows for the calling of any function FullStory currently has, or will ever have, in their library.

```js
import { FullStoryAPI } from 'react-fullstory';

// Identify method
FullStoryAPI('identify', userId, {
  custom_var_1: 'Hello',
  custom_var_2: 'World'
});

// SetUserVars method
FullStoryAPI('setUserVars', {
  custom_var_3: 'Hello',
  custom_var_4: 'World'
});

```
