import React from 'react';
import Featured from './Main/Featured';
import Banner from './Main/Banner';
import Content from './Main/Content';

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
