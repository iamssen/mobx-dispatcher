import * as React from 'react';
import { contextTypes } from './types';

class Component extends React.Component<{}, {}> {
  static contextTypes = contextTypes;
  
  private teardownFunctions: (() => void)[];
  
  render() {
    return null;
  }
  
  componentWillMount() {
    this.teardownFunctions = [];
  }
  
  componentWillUnmount() {
    this.teardownFunctions.forEach(teardown => teardown());
    this.teardownFunctions = null;
  }
  
  dispatch = action => {
    if (!action || typeof action !== 'function') {
      return () => {
      };
    }
    
    const t = action(Object.assign(
      {},
      this.context.mobxStores,
      {dispatch: this.dispatch},
    ));
    
    let broken: boolean = false;
    
    const teardown = () => {
      if (!broken && typeof t === 'function') t();
      broken = true;
    };
    
    this.teardownFunctions.push(teardown);
    
    return teardown;
  };
}

export default Component;