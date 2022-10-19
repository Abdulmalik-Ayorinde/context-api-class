import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import { CountContext } from './context/CountContext';

function Counter() {
	const [state, dispatch] = useContext(CountContext);
	return (
		<div>
			<h1>Hello from counter</h1>
			<h2>Count from parent is: {state.count}</h2>
			<ChildOne />
			<ChildTwo />
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>
				NewIncrement
			</button>{' '}
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>
				NewDecrement
			</button>
			<Link to='/second-counter'>Go to second Counter</Link>
		</div>
	);
}

export default Counter;
