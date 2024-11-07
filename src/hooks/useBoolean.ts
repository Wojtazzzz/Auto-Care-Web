import { useState } from 'react';

export const useBoolean = () => {
	const [state, setState] = useState(false);

	const setTrue = () => setState(true);
	const setFalse = () => setState(false);
	const toggle = () => setState(() => !state);
	const change = (newState: boolean) => setState(newState);
	const setValue = setState;

	return {
		state,
		setTrue,
		setFalse,
		toggle,
		change,
		setValue,
	};
};
