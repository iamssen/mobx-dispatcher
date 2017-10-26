export { default as dispatcher } from './decorator';
export { default as Dispatcher } from './Component';
export declare type Action = (injected: any) => (() => void) | void;
export declare type Dispatch = (action: Action | any) => () => void;
export interface MobXDispatcherProps {
    dispatch: Dispatch;
}
