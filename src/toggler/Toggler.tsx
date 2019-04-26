import { ReactNode, useState } from "react";
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
