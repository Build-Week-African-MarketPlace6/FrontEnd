import React from 'react';
import Nav from './Nav';

class Footer extends React.Component {
	render() {
		return (
			<div>
				<section id='footer'>
					<div className='container'>
						<header>
							<h2>Questions or comments? </h2>
						</header>
						<div className='row'>
							<div className='col-6 col-12-medium'>
								<section></section>
							</div>
							<div className='col-6 col-12-medium'>
								<section>
									<div className='row'>
										<div className='col-6 col-12-small'>
											<ul className='icons'>
												<li className='icon solid fa-home'>
													1234 Somewhere Road
													<br />
													Nashville, TN 00000
													<br />
													USA
												</li>
												<li className='icon solid fa-phone'>
													(000) 000-0000
												</li>
												<li class='icon solid fa-envelope'></li>
											</ul>
										</div>
										<div className='col-6 col-12-small'>
											<ul className='icons'>
												<li className='icon brands fa-twitter'></li>
												<li className='icon brands fa-instagram'></li>
												<li className='icon brands fa-dribbble'></li>
												<li className='icon brands fa-facebook-f'></li>
											</ul>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
					<div id='copyright' className='container'>
						<ul className='links'>
							<li>
								&copy; African Marketplace, BloomTech Students. All
								rights reserved.
							</li>
							<li>
								Design: <a href='http://html5up.net'>HTML5 UP</a>
							</li>
						</ul>
					</div>
				</section>
			</div>
		);
	}
}

export default Footer;
