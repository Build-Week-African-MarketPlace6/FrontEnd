import React from 'react';
import Featured from './HomeContent/Featured';
import Banner from './HomeContent/Banner';
import Content from './HomeContent/Content';
// import headImage from '../assets/images/alexander-schimmeck-pKSm8hV62eI-unsplash.jpg';
import '../assets/css/Home.css';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Featured />
				<Banner />
				<Content />
			</div>
		);
	}
}

export default Home;
