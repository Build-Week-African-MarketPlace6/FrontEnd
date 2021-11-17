import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../assets/css/Home.css';
import Nav from './Nav';
import axios from 'axios';

class Signup extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = event => {
        this.state({
            ...this.state,
            [event.target.username]: event.target.value
        })
    }
    
    handleSubmit = () => {
        axios.post("https://marketplacelambda.herokuapp.com/api/users/register", this.state)
            .then(response => {
                localStorage.setItem("token", response.data.payload);
                localStorage.setItem("username", this.state.username);
                this.props.history.push("/protected");

            }).catch(error => {
                console.error(error);
            })
    };
    
	render() {
		return (
			<section id='header'>
				<Nav />
				<div className='container'>
					<h1> Sign Up</h1>
					<div className='page-wrapper'>
						<Form>
							<Form.Group className='mb-3' controlId='formBasicEmail'>
								<br />
								<Form.Control
									type='email'
									placeholder='Email address'
								/>
								<Form.Text className='text-muted'>
									Please provide a valid email address. This will be
									your login Id.
								</Form.Text>
							</Form.Group>
							<br />
							<Form.Group className='mb-3' controlId='text-muted'>
								<Form.Control type='text' placeholder='Name' />
							</Form.Group>
							<br />

							<Form.Group className='mb-3' controlId='formBasicPassword'>
								<Form.Control type='password' placeholder='Password' />
							</Form.Group>
							<br />
							<Button type='submit'>Submit</Button>
						</Form>
						<p>
							Already have an account? <a href='/Login'> Log in.</a>
						</p>
					</div>
				</div>
			</section>
		);
	}
}

export default Signup;
