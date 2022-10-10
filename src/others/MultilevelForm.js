import React, { useState } from 'react';
import './multilevelform.css';

function MultilevelForm() {
	const [level, setLevel] = useState(1);
	return (
		<div className='form-container'>
			<h2>User Details</h2>
			{level === 1 && (
				<form>
					<div className='form-group'>
						<label>First Name</label>
						<input type='text' placeholder='Enter First Name' />
					</div>
					<div className='form-group'>
						<label>Last Name</label>
						<input type='text' placeholder='Enter Last Name' />
					</div>
					<div className='form-group'>
						<label>Email</label>
						<input type='email' placeholder='Enter Email' />
					</div>
					<div className='form-group'>
						<label>Password</label>
						<input type='password' placeholder='Enter Password' />
					</div>
					<div className='form-group'>
						<label>Confirm Password</label>
						<input type='password' placeholder='Confirm Password' />
					</div>
					<div className='form-btn-group'>
						<button
							onClick={(e) => {
								e.preventDefault();
								setLevel((prevState) => prevState + 1);
							}}>
							Next
						</button>
					</div>
				</form>
			)}
			{level === 2 && <LevelTwo setLevel={setLevel} />}
			{level === 3 && <LevelThree setLevel={setLevel} />}
			<p>Form Level: {level}</p>
		</div>
	);
}

export default MultilevelForm;

function LevelTwo({ setLevel }) {
	function prevForm(e) {
		e.preventDefault();
		setLevel((prevState) => prevState - 1);
	}

	function nextForm(e) {
		e.preventDefault();
		setLevel((prevState) => prevState + 1);
	}
	return (
		<>
			<form>
				<div className='form-group'>
					<label>Location</label>
					<input type='text' placeholder='Enter Location' />
				</div>
				<div className='form-group'>
					<label>Gender</label>
					<input type='text' placeholder='Enter Gender' />
				</div>
				<div className='form-group'>
					<label>Nationality</label>
					<input type='text' placeholder='Enter Nationality' />
				</div>
				<div className='form-btn-group'>
					<button onClick={prevForm}>Previous</button>
					<button onClick={nextForm}>Next</button>
				</div>
			</form>
		</>
	);
}

function LevelThree({ setLevel }) {
	function prevForm(e) {
		e.preventDefault();
		setLevel((prevState) => prevState - 1);
	}
	return (
		<>
			<form>
				<div className='form-group'>
					<label>Phone Number</label>
					<input type='text' placeholder='Enter Phone Number' />
				</div>
				<div className='form-group'>
					<label>Preffered Color</label>
					<input type='color' />
				</div>
				<div className='form-group'>
					<label>range</label>
					<input type='range' />
				</div>
				<div className='form-btn-group'>
					<button onClick={prevForm}>Previous</button>
					<button>Submit</button>
				</div>
			</form>
		</>
	);
}
