import React, { createContext, useReducer } from 'react';
import { intialState, reducer } from './countReducer';

export const CountContext = createContext();

function CountContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, intialState);
	return (
		<>
			<CountContext.Provider value={[state, dispatch]}>
				{children}
			</CountContext.Provider>
		</>
	);
}

export default CountContextProvider;
