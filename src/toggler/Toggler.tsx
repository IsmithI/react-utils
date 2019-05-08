import { ReactNode, useReducer, useState } from "react";
import React from "react";

interface ITogglerChild {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export interface IToggler {
  children: (props: ITogglerChild) => ReactNode;
  intial?: boolean;
}

export const Toggler = ({ children, intial = false }: IToggler) => {
  const [isOpen, setIsOpen] = useState(intial);

  return (
    <>
      {children({
        isOpen,
        setIsOpen
      })}
    </>
  );
};

function togglerReducer(state: boolean, action: any) {
  switch (action.type) {
    case 'OPEN':
      return true;
    case 'CLOSE':
      return false;
    case 'TOGGLE':
      return !state;
  }
}

export function useToggler(initial: boolean = false) {
  const [isOpen, dispatch] = useReducer(togglerReducer, initial);

  return ({
    isOpen,
    open: dispatch({ type: 'OPEN' }),
    close: dispatch({ type: 'CLOSE' }),
    toggle: dispatch({ type: 'TOGGLE' }),
  })
}