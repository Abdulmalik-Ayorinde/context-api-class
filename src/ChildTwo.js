import React from 'react';

function ChildTwo({ count, setCount }) {
	function increment() {
		setCount((initalValue) => initalValue + 1);
	}

	function decrement() {
		setCount((initalValue) => initalValue - 1);
	}
	return (
		<div>
			<h1>Count from child Three: {count}</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
}

export default ChildTwo;
