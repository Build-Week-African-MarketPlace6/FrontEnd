import './App.css';
import AddForm from './components/AddForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
	return (
		<div className='App'>
			<AddForm />

			<Header />
			<Router>
				<Route path='/Signup'>
					<Signup />
				</Route>
				<Route path='/Login'>
					<Login />
				</Route>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='AddItem'>
					<AddForm />
				</Route>
			</Router>
		</div>
	);
}

export default App;
