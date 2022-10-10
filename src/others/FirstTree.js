import React from 'react';
import SecondTree from './SecondTree';

function FirstTree({ name, setName }) {
	return (
		<div>
			<h3>First Tree: {name}</h3>
			<SecondTree name={name} setName={setName} />
		</div>
	);
}

export default FirstTree;
