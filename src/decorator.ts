import * as React from 'react';
import { contextTypes } from './types';


const decorator: any = InnerComponent => {
  const displayName = 'dispatch-' + (InnerComponent.displayName || InnerComponent.name || (InnerComponent.constructor && InnerComponent.constructor.name) || 'Unknown');
  
  return class extends React.Component<{}, {}> {
    static displayName = displayName;
    static contextTypes = contextTypes;
    
    private teardownFunctions: (() => void)[];
    
    render() {
      return React.createElement(InnerComponent, Object.assign({}, this.props, {dispatch: this.dispatch}));
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
  };
};

export default decorator;