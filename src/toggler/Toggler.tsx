import { ReactNode, useReducer } from "react";
import * as React from "react";

interface ITogglerChild {
	isOpen: boolean;
	open: () => void;
	close: () => void;
	toggle: () => void;
	set: (value: boolean) => void;
}

export interface IToggler {
	children: (props: ITogglerChild) => ReactNode;
	initial?: boolean;
}

export const Toggler = ({ children, initial = false }: IToggler) => {
	const [isOpen, dispatch] = useReducer(togglerReducer, initial);

	return (
		<>
			{children({
				isOpen,
				open: () => dispatch({ type: "OPEN" }),
				close: () => dispatch({ type: "CLOSE" }),
				toggle: () => dispatch({ type: "TOGGLE" }),
				set: value => dispatch({ type: "SET", value })
			})}
		</>
	);
};

function togglerReducer(state: boolean, action: any) {
	switch (action.type) {
		case "OPEN":
			return true;
		case "CLOSE":
			return false;
		case "TOGGLE":
			return !state;
		case "SET":
			return action.value;
		default:
			return state;
	}
}

export function useToggler(initial = false): ITogglerChild {
	const [isOpen, dispatch] = useReducer(togglerReducer, initial);

	return {
		isOpen,
		open: () => dispatch({ type: "OPEN" }),
		close: () => dispatch({ type: "CLOSE" }),
		toggle: () => dispatch({ type: "TOGGLE" }),
		set: value => dispatch({ type: "SET", value })
	};
}
