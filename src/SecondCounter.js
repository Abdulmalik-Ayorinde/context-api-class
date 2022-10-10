import React, { useContext } from 'react';
import { CountContext } from './App';

function SecondCounter() {
	const { count } = useContext(CountContext);
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
