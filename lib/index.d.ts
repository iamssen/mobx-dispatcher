export { dispatcher } from './dispatcher';
export declare type Action = (injected: any) => (() => void) | void;
export declare type Dispatch = (action: Action | any) => () => void;
