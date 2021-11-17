import axios from 'axios';
import React from 'react';
import { Form, Button } from 'react-bootstrap';

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
        axios.post("http://localhost:5000/api/login", this.state)
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
			<div>
				<h1> I'm the Login page </h1>
                <Form onSubmit = { this.handleSubmit }>
                    <label> Username
                        <input
                            type = "text"
                            name = "username"
                            placeholder = "Enter Username"
                            value = { this.state.username }
                            onChange = { handleChange }
                        />
                    </label>

                    <label> Password
                        <input
                            type = "text"
                            name = "password"
                            placeholder = "Enter password"
                            value = { this.state.password }
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
