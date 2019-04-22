import { ELoadState } from "./ELoadState";
export interface ILoadChildren<T> {
  triggerLoad: () => void;
  data?: T;
  error: any;
  state: ELoadState;
  idle: boolean;
  loaded: boolean;
  failed: boolean;
  pending: boolean;
}
