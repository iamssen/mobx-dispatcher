import { PropTypes } from 'mobx-react';
import * as React from 'react';

const contextTypes = Object.freeze({
  mobxStores: PropTypes.objectOrObservableObject,
});

export const dispatcher: any = InnerComponent => {
  const displayName = 'dispatch-' + (InnerComponent.displayName || InnerComponent.name || (InnerComponent.constructor && InnerComponent.constructor.name) || 'Unknown');
  
  return class extends React.Component<{}, {}> {
    static displayName = displayName;
    static contextTypes = contextTypes;
    
    private store: (() => void)[];
    
    render() {
      return React.createElement(InnerComponent, Object.assign({}, this.props, {dispatch: this.dispatch}));
    }
    
    componentWillMount() {
      this.store = [];
    }
    
    componentWillUnmount() {
      this.store.forEach(teardown => teardown());
      this.store = null;
    }
    
    dispatch = action => {
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
      
      this.store.push(teardown);
      
      return teardown;
    };
  };
};