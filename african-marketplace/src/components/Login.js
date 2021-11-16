import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Nav from './Nav';

class Signup extends React.Component {
	render() {
		return (
			<section id='header'>
				<Nav />
				<div className='container'>
					<h1>Log In</h1>
					<div className='page-wrapper'>
						<Form>
							<Form.Group className='mb-3' controlId='formBasicEmail'>
								<Form.Label></Form.Label>
								<Form.Control type='email' placeholder='Enter email' />
								<Form.Text className='text-muted'>
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>

							<Form.Group className='mb-3' controlId='formBasicPassword'>
								<Form.Label></Form.Label>
								<Form.Control type='password' placeholder='Password' />
							</Form.Group>
							<Form.Group className='mb-3' controlId='formBasicCheckbox'>
								<Form.Check type='checkbox' label='Check me out' />
							</Form.Group>
							<Button type='submit'>Submit</Button>
						</Form>
					</div>
				</div>
			</section>
		);
	}
}

export default Signup;
