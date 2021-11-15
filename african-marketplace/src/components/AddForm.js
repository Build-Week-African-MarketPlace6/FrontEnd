import React from 'react';
import { Link } from 'react-router-dom';

class AddForm extends React.Component {
	state = {
		itemData: {
			item: '',
			price: '',
			description: '',
			id: '',
		},
	};

	handleChange = (event) => {
		this.setState({
			itemData: {
				...this.state.itemData,
				[event.target.name]: event.target.value,
			},
		});
	};

	render() {
		return (
			<div>
				<h1> I'm the Add Form </h1>
			</div>
		);
	}
}

export default AddForm;
