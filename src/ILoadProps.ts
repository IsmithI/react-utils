import { ILoadChildren } from "./ILoadChildren";
import { ReactNode } from "react";

export interface ILoadProps<T> {
  instantly?: boolean;
  on: () => Promise<T>;
  children: (props: ILoadChildren<T>) => ReactNode;
}