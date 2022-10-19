import React, { useState } from 'react';

import Counter from './Counter';

import {
	BrowserRouter,
	createBrowserRouter,
	Route,
	RouterProvider,
	Routes,
} from 'react-router-dom';
import SecondCounter from './SecondCounter';
import CountContextProvider from './context/CountContext';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Counter />,
		},
		{
			path: '/second-counter',
			element: <SecondCounter />,
		},
	]);
	return (
		<>
			<CountContextProvider>
				{/* <RouterProvider router={router} /> */}
				<BrowserRouter>
					<Routes>
						<Route element={<Counter />} path='/' />
						<Route element={<SecondCounter />} path='/second-counter' />
					</Routes>
				</BrowserRouter>
			</CountContextProvider>
		</>
	);
}

export default App;

// {
// 	path: '/',
// 	element: (
// 		<TypingEvent
// 			prop1='this is prop 1'
// 			prop2='this is prop 2'
// 			prop3='this is prop 3'
// 		/>
// 	),
// },
// {
// 	path: '/component',
// 	element: <Component />,
// },
// {
// 	path: '/counter',
// 	element: <Counter />,
// },
// {
// 	path: '/form',
// 	element: <Form />,
// },
// {
// 	path: '/form-two',
// 	element: <SecondForm />,
// },
// {
// 	path: '/state',
// 	// element: <Parent />,
// 	element: <LiftState />,
// },
// {
// 	path: '/multilevel-form',
// 	element: <MultilevelForm />,
// },
