import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';

import AddForm from './components/AddForm';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
	return (
		<div className='page-wrapper'>
			<Header />
			<Routes>
				<Route path='/Signup'>
					<Signup />
				</Route>
				<Route path='/Login'>
					<Login />
				</Route>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/AddItem'>
					<AddForm />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
