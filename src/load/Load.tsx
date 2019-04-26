import React, { useState } from "react";
import { ELoadState } from "./ELoadState";
import { ILoadProps } from "./ILoadProps";

export const Load = <T extends any>({
  instantly,
  on,
  children
}: ILoadProps<T>) => {
  const [state, setState] = useState<ELoadState>(ELoadState.IDLE);
  const [data, setData] = useState<T>();
  const [error, setError] = useState();

  const triggerLoad = () => {
    setState(ELoadState.PENDING);
    return on()
      .then(res => setData(res))
      .then(() => setState(ELoadState.SUCCESS))
      .catch(err => {
        setError(err);
        setState(ELoadState.ERROR);
      });
  };

  if (instantly && state === ELoadState.IDLE) triggerLoad();

  return (
    <>
      {children({
        triggerLoad,
        data,
        error,
        state,
        idle: state === ELoadState.IDLE,
        pending: state === ELoadState.PENDING,
        loaded: state === ELoadState.SUCCESS,
        failed: state === ELoadState.ERROR
      })}
    </>
  );
};
