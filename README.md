# React Fullstory

![Travis (.org)](https://img.shields.io/travis/mnsht/react-fullstory.svg?color=green)
![npm](https://img.shields.io/npm/v/react-fullstory.svg?color=green)
![GitHub](https://img.shields.io/github/license/mnsht/react-fullstory.svg?color=green)

A component to run FullStory in your React application. This is safe to use both on the client and in a server-rendered environment. If you run into issues, please submit an issue. Pull requests are also welcome!

## Installation

NPM:<br />`npm i react-fullstory --save`

Yarn:<br />`yarn add react-fullstory`

## Usage

Include the `<FullStory />` component somewhere in your application - probably in the top-most component.

```js
import { Component } from 'react';
import FullStory from 'react-fullstory';

const ORG_ID = 'XXXXX'; // Fill this in here

export class App extends Component {
  render() {
    return (
      <div className="app">
        <FullStory org={ORG_ID} />
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

## Contributing

1. Fork
2. Clone
3. Work
4. PR

In order to get things running locally, you can use the following commands:

1. `yarn install` - installs all dev dependencies
2. `yarn storybook` - a storybook preview where you can put in your own `ORG_ID`
3. _Optional:_ `yarn test:watch` - run this in a separate terminal window to live-reload your test suite on save

### Building

`yarn build`

This will compile your code into the `dist`. **You should never need to run this manually as the whole build process is taken care of for you in other scripts.**

### Testing

`yarn test` - one-time run through of your tests, also generates your coverage report. **You won't likely need to run this yourself.**

`yarn test:watch` - live-reloading your test suite upon file save, good for development
