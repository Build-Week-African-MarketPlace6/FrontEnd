import axios from 'axios';
import React from 'react';
import { Form, Button } from 'react-bootstrap';

class Signup extends React.Component {
    
    state = {
        username: "",
        password: ""
    }

    

	render() {
		return (
			<div>
				<h1> I'm the Login page </h1>
                <Form>
                    <label> Username
                        <input
                            type = "text"
                            name = "username"
                            placeholder = "Enter Username"
                            value = { state.username }
                            onChange = { handleChange }
                        />
                    </label>

                    <label> Password
                        <input
                            type = "text"
                            name = "password"
                            placeholder = "Enter password"
                            value = { state.password }
                            onChange = { handleChange }
                        />
                    </label>
                    
                </Form>
				{/* <Form>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control type='email' placeholder='Enter email' />
						<Form.Text className='text-muted'>
							We'll never share your email with anyone else.
						</Form.Text
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control type='password' placeholder='Password' />
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicCheckbox'>
						<Form.Check type='checkbox' label='Check me out' />
					</Form.Group>
					<Button type='submit'>Submit</Button>
				</Form> */}
			</div>
		);
	} 
}

export default Signup;
