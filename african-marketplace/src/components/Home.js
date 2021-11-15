import React from 'react';
import Featured from './HomeContent/Featured';
import Banner from './HomeContent/Banner';
import Content from './HomeContent/Content';

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
