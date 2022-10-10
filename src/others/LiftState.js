import React, { useState } from 'react';
import Button from './Button';

function LiftState() {
	const [count, setCount] = useState(0);
	function increment() {
		setCount((prevState) => prevState + 1);
	}

	function decrement() {
		setCount((prevState) => prevState - 1);
	}
	return (
		<>
			<h1>{count}</h1>
			<Button btnTitle='Increment' handleClick={increment} />
			<Button btnTitle='Decrement' handleClick={decrement} />
		</>
	);
}

export default LiftState;
