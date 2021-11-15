<<<<<<< HEAD
import React from 'react';
import Nav from './Nav';

class Header extends React.Component {
	render() {
		return (
			<section id='header'>
				<div class='container'>
					<h1 id='logo'> African Marketplace</h1>
					<p>A Marketplace Design created by Lambda Build Team 6</p>
					<div class='container'></div>
				</div>
			</section>
		);
	}
}

export default Header;
=======
import React from "react";
import {Link} from "react-router-dom";

export default function Head() {

    return (
        <div className='head'>
            <Link className="Nav" to="/">Home</Link>
            <Link className="Nav" to="/login">Login</Link>
            <Link className="Nav" to="/Signup">Sign Up</Link>
            <Link className="Nav" to="/AddProduct">Add Product</Link>
        </div>
    )
}
>>>>>>> origin/main
