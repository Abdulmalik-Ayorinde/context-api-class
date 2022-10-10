import React from 'react';
import { useNavigate } from 'react-router-dom';

function Back() {
	const navigate = useNavigate();

	function goBack() {
		return navigate(-1);
	}
	return (
		<div>
			<button onClick={goBack}>Back</button>
		</div>
	);
}

export default Back;
