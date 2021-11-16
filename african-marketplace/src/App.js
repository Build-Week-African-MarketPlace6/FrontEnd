import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';
import useDarkmode from './hooks/useDarkmode';
// import PrivateRoute from './components/PrivateRoute';

function App() {
	const [cart, setCart] = useState([]);
	const [darkmode, setDarkmode] = useDarkmode();

	// const toggleMode = event => {
	//   event.preventDefault();
	//   setDarkmode(!darkmode);
	// }

	const addItem = (item) => {
		setCart([...cart, item]);
	};
  const removeFromCart = (id) => {
    setCart(cart.filter((i) => i.item_id !== id));
  }
  
	return (
		<Router>
			<div className='App'>
				<Nav />
				<Switch>
					<Route exact path='/'>
						<div id='page-wrapper'>
							<Header />
							<Home />
						</div>
					</Route>

					<Route path='/productList'>
						<ProductList addItem={addItem} />
					</Route>

					<Route path='/cart'>
						<ShoppingCart cart={cart} removeFromCart={removeFromCart} />
					</Route>

					<Route exact path='/' component={Login} />

					<Route exact path='/signup' component={Signup} />

					<Route path='/Signup'>
						<Signup />
					</Route>

					<Route path='/Login'>
						<Login />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
