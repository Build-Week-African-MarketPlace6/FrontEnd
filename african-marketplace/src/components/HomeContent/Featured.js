import React from 'react';
import '../../assets/css/Home.css';
import featuredOne from '../../assets/images/alexander-schimmeck-pKSm8hV62eI-unsplash.jpg';
import featuredTwo from '../../assets/images/karim-manjra-fm9wqDNXyQ0-unsplash.jpg';
import featuredThree from '../../assets/images/kristina-balic-M13V8hgvm-E-unsplash.jpg';

class Featured extends React.Component {
	render() {
		return (
			<section id='features'>
				<div className='container'>
					<header>
						<h2>
							Featured <strong>Products</strong>
						</h2>
					</header>
					<div className='row aln-center'>
						<div className='col-4 col-6-medium col-12-small'>
							<section>
								<a href='#' className='image featured'>
									<img src={featuredOne} alt='' />
								</a>
								<header>
									<h3>Featured First Item</h3>
								</header>
								<p>
									This is <strong>Strongly Typed</strong>, a free,
									fully responsive site template by HTML5 UP. Free for
									personal and commercial use under the CCA 3.0
									license.
								</p>
							</section>
						</div>
						<div className='col-4 col-6-medium col-12-small'>
							<section>
								<a href='#' className='image featured'>
									<img src={featuredTwo} alt='' />
								</a>
								<header>
									<h3>Nice! What is HTML5 UP?</h3>
								</header>
								<p>
									HTML5 UP is a side project of AJ’s(= me). I started
									it as a way to both test my responsive tools and
									sharpen up my coding and design skills a bit.
								</p>
							</section>
						</div>
						<div className='col-4 col-6-medium col-12-small'>
							<section>
								<a href='#' className='image featured'>
									<img src={featuredThree} alt='' />
								</a>
								<header>
									<h3>What's this built with?</h3>
								</header>
								<p>
									<strong>Responsive Tools</strong> is a simple set of
									tools for building responsive sites and apps. All of
									my templates at HTML5 UP are built using these tools.
								</p>
							</section>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Featured;
