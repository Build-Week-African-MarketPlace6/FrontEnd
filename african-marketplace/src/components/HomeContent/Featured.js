import React from 'react';

class Featured extends React.Component {
	render() {
		return (
			<section id='features'>
				<div className='container'>
					<header>
						<h2>I am the Features Header</h2>
					</header>
					<div className='row aln-center'>
						<div className='col-4 col-6-medium col-12-small'>
							<section>
								<img src='../../public/images/pic01.jpg' alt='' />
								<header>
									<h3>So this is one feature</h3>
								</header>
								<p>This is content in this particular feature</p>
							</section>
						</div>
					</div>

					<div className='row aln-center'>
						<div className='col-4 col-6-medium col-12-small'>
							<section>
								<img src='../../public/images/pic01.jpg' alt='' />
								<header>
									<h3>So this is two features</h3>
								</header>
								<p>This is content in this particular feature</p>
							</section>
						</div>
					</div>

					<div className='row aln-center'>
						<div className='col-4 col-6-medium col-12-small'>
							<section>
								<img src='../../public/images/pic01.jpg' alt='' />
								<header>
									<h3>So this is three features</h3>
								</header>
								<p>This is content in this particular feature</p>
							</section>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Featured;
