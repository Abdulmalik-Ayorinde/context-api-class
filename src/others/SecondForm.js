import React, { useState } from 'react';

function SecondForm() {
	const formInitalValues = {
		name: '',
		email: '',
		password: '',
	};

	const [formInputs, setFormInputs] = useState(formInitalValues);
	// console.log(formInputs);

	function handleSubmit(event) {
		event.preventDefault();
		// console.log(event);
	}

	function handleChange(event) {
		setFormInputs((intitalValues) => {
			return (
				console.log(event.target),
				// console.log(event.target),
				{
					...intitalValues,
					[event.target.name]: event.target.value,
				}
			);
		});
	}
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
						value={formInputs.name}
						onChange={handleChange}
					/>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
					<label>Email</label>
					<input
						name='email'
						type='email'
						placeholder='Enter Email'
						value={formInputs.email}
						onChange={handleChange}
					/>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
					<label>Password</label>
					<input
						name='password'
						type='password'
						placeholder='Enter Password'
						value={formInputs.password}
						onChange={handleChange}
					/>
				</div>
				<button style={{ width: '50%', marginTop: '5px' }}>Submit</button>
			</form>
		</>
	);
}

export default SecondForm;
