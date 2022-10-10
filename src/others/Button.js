import React from 'react';

function Button({ btnTitle, handleClick }) {
	return (
		<>
			<button onClick={handleClick}>{btnTitle}</button>
		</>
	);
}

export default Button;
