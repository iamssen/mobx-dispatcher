export { default as dispatcher } from './decorator';
export { default as Dispatcher } from './Component';

export type Action = (injected: any) => (() => void) | void;
export type Dispatch = (action: Action | any) => () => void;

export interface MobXDispatcherProps {
  dispatch: Dispatch;
}
