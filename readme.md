# Status

<img src="https://travis-ci.org/iamssen/mobx-dispatcher.svg?branch=master"/>

# Installation

```
npm install mobx-dispatcher --save
```

# How to Use

```
export updateText = (text: string) => ({mystore}: {mystore:SomeStore}) => {
  mystore.updateText(text);
}
```

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
class Component extends React.Component<Props, State> {
  render() {
    <div>
      <p>{this.props.mystore.text}</p>
      <button onClick={this.dispatchText}>dispatch!!!</button>
    </div>
  }
  
  dispatchText = () => {
    this.props.dispatch(updateText('Hello?'));
  }
}
```