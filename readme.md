# Status

<img src="https://travis-ci.org/iamssen/mobx-dispatcher.svg?branch=master"/>

# Installation

```
npm install mobx-dispatcher --save
```

# How to Use

```
// action.ts
export updateText = (text: string) => ({mystore}: {mystore:SomeStore}) => {
  mystore.updateText(text);
}
```

```
// dispatchOnly.tsx
import * as React from 'react';
import { dispatcher, Dispatch } from 'mobx-dispatcher';

interface Props {
  dispatch?: Dispatch;
}

interface State {
}

@dispatcher
export default class extends React.Component<Props, State> {
  render() {
    return (
      <button onClick={this.dispatchText}>dispatch!!!</button>
    );
  }
  
  dispatchText = () => {
    this.props.dispatch(updateText('Hello?'));
  }
}
```

```
// dispatch.tsx
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { dispatcher, Dispatch } from 'mobx-dispatcher';
import { SomeStore } from '../stores';
import { updateText } from '../actions';

interface Props {
  mystore?: SomeStore;
  dispatch?: Dispatch;
}

interface State {
}

@inject('mystore') @dispatcher @observer
export default class Component extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <p>{this.props.mystore.text}</p>
        <button onClick={this.dispatchText}>dispatch!!!</button>
      </div>
    );
  }
  
  dispatchText = () => {
    this.props.dispatch(updateText('World?'));
  }
}
```