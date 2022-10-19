import React, { useContext, useRef } from 'react';
import { CountContext } from './context/CountContext';

function ChildOne() {
	const checkboxRef = useRef(null);
	const [state, dispatch] = useContext(CountContext);

	function handleClick() {
		console.log(checkboxRef);
		checkboxRef.current.style.backgroundColor = 'blue';
	}
	return (
		<div>
			<h1>
				Count from Child One:
				{state.count}
				<div
					ref={checkboxRef}
					style={{ backgroundColor: 'red', height: 300, width: 500 }}>
					<input type='checkbox' onClick={handleClick} />
				</div>
			</h1>
		</div>
	);
}

export default ChildOne;
