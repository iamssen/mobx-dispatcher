export { dispatcher } from './dispatcher';

export type Action = (injected: any) => (() => void) | void;
export type Dispatch = (action: Action | any) => () => void;
