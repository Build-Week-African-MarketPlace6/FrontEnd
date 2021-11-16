import React from 'react';
import '../../assets/css/Home.css';
import featuredOne from '../../assets/images/alexander-schimmeck-pKSm8hV62eI-unsplash.jpg';
import featuredTwo from '../../assets/images/karim-manjra-fm9wqDNXyQ0-unsplash.jpg';
import featuredThree from '../../assets/images/kristina-balic-M13V8hgvm-E-unsplash.jpg';

class Featured extends React.Component {
	render() {
		return (
			<section className='featured'>
				<div className='container'>
					<header>
						<h2>I am the Features Header</h2>
					</header>
					<div className='feature-item'>
						<div className='item-section'>
							<img className='featured-img' src={featuredOne} alt='' />
						</div>
						<div className='item-section'>
							<img className='featured-img' src={featuredTwo} alt='' />
						</div>
						<div className='item-section'>
							<img className='featured-img' src={featuredThree} alt='' />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Featured;
