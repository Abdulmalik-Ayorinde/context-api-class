import React, { useContext } from 'react';
import { CountContext } from './context/CountContext';

function ChildTwo() {
	const { count, setCount } = useContext(CountContext);
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
