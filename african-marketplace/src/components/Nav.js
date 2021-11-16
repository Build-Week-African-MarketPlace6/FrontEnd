import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<div className='nav-wrapper'>
			<nav id='nav'>
				<ul>
					<li>
						<Link
							className='white-space nowrap icon solid fa-home'
							to='/'
						>
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
				</ul>
			</nav>
		</div>
	);
}

<nav id='nav'>
	<ul>
		<li>
			<a class='icon solid fa-home' href='index.html'>
				<span>Introduction</span>
			</a>
		</li>
		<li>
			<a href='#' class='icon fa-chart-bar'>
				<span>Dropdown</span>
			</a>
			<ul>
				<li>
					<a href='#'>Lorem ipsum dolor</a>
				</li>
				<li>
					<a href='#'>Magna phasellus</a>
				</li>
				<li>
					<a href='#'>Etiam dolore nisl</a>
				</li>
				<li>
					<a href='#'>Phasellus consequat</a>
					<ul>
						<li>
							<a href='#'>Magna phasellus</a>
						</li>
						<li>
							<a href='#'>Etiam dolore nisl</a>
						</li>
						<li>
							<a href='#'>Phasellus consequat</a>
						</li>
					</ul>
				</li>
				<li>
					<a href='#'>Veroeros feugiat</a>
				</li>
			</ul>
		</li>
		<li>
			<a class='icon solid fa-cog' href='left-sidebar.html'>
				<span>Left Sidebar</span>
			</a>
		</li>
		<li>
			<a class='icon solid fa-retweet' href='right-sidebar.html'>
				<span>Right Sidebar</span>
			</a>
		</li>
		<li>
			<a class='icon solid fa-sitemap' href='no-sidebar.html'>
				<span>No Sidebar</span>
			</a>
		</li>
	</ul>
</nav>;
