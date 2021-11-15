import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';



function App() {

  const [cart, setCart] = useState([]);

  const addItem = item => {
		setCart([...cart, item])
	};

  const removeFromCart = (id) => {
    setCart(cart.filter((i) => i.item_id !== id));
  }

  return (
    <Router>
    <div className="App">

      <Link to='/productList'>Products</Link>
      <Link to='/cart'>Cart</Link>

   <Switch>
      <Route exact path="/">
        <div><h1>Home Page</h1></div>
      </Route>
      
      <Route path = '/productList'>
        <ProductList addItem={addItem}/>
      </Route>

      <Route path="/cart">
				<ShoppingCart cart ={cart} removeFromCart={removeFromCart}/>
			</Route>

   </Switch>
    </div>
    </Router>
  );
}

export default App;
