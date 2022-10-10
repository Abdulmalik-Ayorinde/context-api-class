import React, { useState } from 'react';

function Counter() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => setCount((intialValue) => intialValue + 1)}>
				increment
			</button>
			<button onClick={() => setCount((intialValue) => intialValue - 1)}>
				decrement
			</button>
		</div>
	);
}

export default Counter;
