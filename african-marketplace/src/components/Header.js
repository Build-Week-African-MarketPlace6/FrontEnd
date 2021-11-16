import React from 'react';
import Nav from './Nav';

export default function Header() {
	return (
		<section id='header'>
			<Nav />
			<div className='container'>
				<h1 id='logo'>African Marketplace</h1>
				<p>A BloomTech Student Project</p>
			</div>
		</section>
	);
}
