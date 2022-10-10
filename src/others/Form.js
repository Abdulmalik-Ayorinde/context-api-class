import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		console.log(event);
	}

	// function handleChange(event) {
	// 	setName(event.target.value);

	// }
	return (
		<>
			<form
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
					width: '100vw',
					backgroundColor: '#00AA33',
				}}
				onSubmit={handleSubmit}>
				<div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
					<label>Full Name</label>
					<input
						name='name'
						type='text'
						placeholder='Enter FullName'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
					<label>Email</label>
					<input
						name='email'
						type='email'
						placeholder='Enter Email'
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
					<label>Password</label>
					<input
						name='password'
						type='password'
						placeholder='Enter Password'
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
				</div>
				<button style={{ width: '50%', marginTop: '5px' }}>Submit</button>
				<Link to='/form-two'>To Second Form</Link>
			</form>
		</>
	);
}

export default Form;
