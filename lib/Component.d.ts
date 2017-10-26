/// <reference types="react" />
import * as React from 'react';
declare class Component extends React.Component<{}, {}> {
    static contextTypes: Readonly<{
        mobxStores: React.Requireable<any>;
    }>;
    private teardownFunctions;
    render(): any;
    componentWillMount(): void;
    componentWillUnmount(): void;
    dispatch: (action: any) => () => void;
}
export default Component;
