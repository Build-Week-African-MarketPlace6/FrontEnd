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
