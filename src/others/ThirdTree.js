import React, { useEffect, useState } from 'react';

function ThirdTree({ name, setName }) {
	const [posts, setPosts] = useState();
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((data) => {
				setPosts(data);
			});
	}, []);
	function changeName() {
		setName('Changed from the third Tree');
	}
	return (
		<div>
			<h3>Third Tree: {name}</h3>
			<button onClick={changeName}>Click To Change third tree</button>
			{/* {posts &&
				posts.map((singlePost) => (
					<p>
						{singlePost.id} - {singlePost.title}
					</p>
				))} */}
			{posts ? (
				posts.map((singlePost) => (
					<p key={singlePost.id}>
						{singlePost.id} - {singlePost.title}
					</p>
				))
			) : (
				<h1>Loading</h1>
			)}
		</div>
	);
}

export default ThirdTree;
