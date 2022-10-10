import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Back from './others/Back';

function Component() {
	const [status, setStatus] = useState('away');
	return (
		<div>
			<h1>Hello from Component Component</h1>
			{/* {status === 'away' && <HomePage />} */}

			{status === 'away' ? (
				<HomePage />
			) : status === 'home' ? (
				<Dashboard />
			) : (
				<NotFound />
			)}
		</div>
	);
}

export default Component;

function HomePage() {
	return (
		<div>
			<h2>Welcome to the App Home page</h2>
			<Link to='/' state={'hello'}>
				Go back Home
			</Link>
			<Back />
		</div>
	);
}

function Dashboard() {
	return (
		<div>
			<h2>Welcome to the App Dashboard page</h2>
		</div>
	);
}

function NotFound() {
	return (
		<div>
			<h2>Page Not Found</h2>
		</div>
	);
}
