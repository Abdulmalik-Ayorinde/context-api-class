import React from 'react';
import ThirdTree from './ThirdTree';

function SecondTree({ name, setName }) {
	return (
		<div>
			<h3>Second Tree: {name}</h3>
			<ThirdTree name={name} setName={setName} />
		</div>
	);
}

export default SecondTree;
