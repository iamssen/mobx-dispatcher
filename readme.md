# Status

<img src="https://travis-ci.org/iamssen/mobx-dispatcher.svg?branch=master"/>

# Installation

```
npm install mobx-dispatcher --save
```

# About
`mobx-dispatcher` is an extension to `mobx-react`.

If you use `<Provider/>` and `@inject` (https://github.com/mobxjs/mobx-react#provider-and-inject),
you can use this to isolate the Action.

# How to Use

```
// updateText.ts
export default (text: string) => ({mystore}: {mystore:SomeStore}) => {
  mystore.updateText(text);
}
```
Create an Action. The second block `{mystore}` will be injected automatically by `@dispatcher`.

```
import * as React from 'react';
import { dispatcher, Dispatch } from 'mobx-dispatcher';
import { updateText } from '../actions';

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
You can use `dispatch()` to execute the Action.

```
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
It can also be used with `@inject`, `@observer`.

Note that `@dispatcher` must be declared before `@observer`.
(`@observer` will not work if `@dispatcher` is declared after `@observer`)