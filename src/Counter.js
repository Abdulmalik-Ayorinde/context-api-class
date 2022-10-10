import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CountContext } from './App';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

function Counter() {
	const { count, setCount } = useContext(CountContext);
	return (
		<div>
			<h1>Hello from counter</h1>
			<h2>Count from parent is: {count}</h2>
			<ChildOne />
			<ChildTwo />
			<button onClick={() => setCount((prevState) => prevState + 1)}>
				NewIncrement
			</button>{' '}
			<button onClick={() => setCount((prevState) => prevState - 1)}>
				NewDecrement
			</button>
			<Link to='/second-counter'>Go to second Counter</Link>
		</div>
	);
}

export default Counter;
