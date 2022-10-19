import React, { useContext } from 'react';
import CountContextProvider from './context/CountContext';

function SecondCounter() {
	const { count } = useContext(CountContextProvider);
	return (
		<div>
			<h1>
				This is the second Counter:
				{count}
			</h1>
		</div>
	);
}

export default SecondCounter;
