import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TypingEvent({ prop1, prop2, prop3 }) {
	const [write, setWrite] = useState('');
	const [demo, setDemo] = useState('Demo');
	const [nice, setNice] = useState('Nice');

	function handleWriting(event) {
		// console.log(event.target.value);
		setWrite(event.target.value);
	}

	function handleMouseEnter(event) {
		console.log(event);
		setWrite('Mouse Entered');
	}

	return (
		<div>
			<input
				value={write}
				onInput={handleWriting}
				type='text'
				placeholder='Typing ...'
			/>
			<h1
				onMouseEnter={handleMouseEnter}
				style={{ color: '#fff', backgroundColor: 'red' }}>
				{write}
			</h1>
			<div>
				state: {demo}
				state: {nice}
				Props: {prop1}
				Props: {prop2}
				Props: {prop3}
			</div>
			<div>
				<Link to='/component'>Go to Component </Link>
			</div>
			<br />
			<div>
				<Link to='/counter'>Go to Counter </Link>
			</div>
			<div>
				<Link to='/form'>Go to Form</Link>
			</div>
			<br />
			<div>
				<Link to='/state'>Go to Lift State</Link>
			</div>
			<br />
			<div>
				<Link to='/multilevel-form'>Go to Multi Level Form</Link>
			</div>
		</div>
	);
}

export default TypingEvent;
