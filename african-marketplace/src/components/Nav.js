import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

export default function Nav() {
	return (
		<nav id='nav'>
			<ul>
				<li>
					<Link className='white-space nowrap icon solid fa-home' to='/'>
						<span>Home</span>
					</Link>
				</li>
				<li>
					<Link
						className='white-space nowrap icon fa-chart-bar'
						to='/login'
					>
						<span>Login</span>
					</Link>
				</li>

				<li>
					<Link
						className='white-space nowrap icon solid fa-retweet'
						to='/AddProduct'
					>
						<span>Add Product</span>
					</Link>
				</li>

				<li>
					<Link
						className='white-space nowrap icon solid fa-cog'
						to='/Signup'
					>
						<span>Sign Up</span>
					</Link>
				</li>
				<li className='icon brands fa-twitter'> </li>
				<li className='icon brands fa-instagram'></li>
				<li className='icon brands fa-dribbble'></li>
				<li className='icon brands fa-facebook-f'></li>
			</ul>
		</nav>
	);
}
