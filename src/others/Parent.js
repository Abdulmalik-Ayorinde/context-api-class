import React, { useState } from 'react';
import FirstTree from './FirstTree';
import SecondTree from './SecondTree';
import ThirdTree from './ThirdTree';

function Parent() {
	const [name, setName] = useState('John');
	function changeName() {
		setName('Doe');
	}
	return (
		<div>
			<h3>Parent: {name}</h3>
			<FirstTree name={name} setName={setName} />
			<SecondTree />
			{/* <ThirdTree /> */}
			<button onClick={changeName}>Click To Change</button>
		</div>
	);
}

export default Parent;
