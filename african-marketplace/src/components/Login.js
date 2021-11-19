// import axios from 'axios';
// import React from 'react';
// import { Form, Button } from 'react-bootstrap';
// import Nav from './Nav';


// class Signup extends React.Component {
    
//     state = {
//         username: "",
//         password: ""
//     }

//     handleChange = event => {
//         this.state({
//             ...this.state,
//             [event.target.username]: event.target.value
//         })
//     }

    
//     handleSubmit = () => {
//         axios.post("https://marketplacelambda.herokuapp.com/api/users/login", this.state)
//             .then(response => {
//                 localStorage.setItem("token", response.data.payload);
//                 localStorage.setItem("username", this.state.username);
//                 this.props.history.push("/protected");

//             }).catch(error => {
//                 console.error(error);
//             })
//     };

// 	render() {
// 		return (
// 			<div>

//                 <Nav />
// 				<h1> I'm the Login page </h1>
                
//                 <Form onSubmit = { this.handleSubmit }>
//                     <label> Username
//                         <input
//                             type = "text"
//                             name = "username"
//                             placeholder = "Enter Username"
//                             value = { this.state.username }
//                             onChange = { this.handleChange }
//                         />
//                     </label>

//                     <label> Password
//                         <input
//                             type = "text"
//                             name = "password"
//                             placeholder = "Enter password"
//                             value = { this.state.password }
//                             onChange = { this.handleChange }
//                         />
//                     </label>

//                     <Button type='submit' onSubmit = { this.handleSubmit }>Login</Button>
//                 </Form>
// 				{/* <Form>
// 					<Form.Group className='mb-3' controlId='formBasicEmail'>
// 						<Form.Label>Email address</Form.Label>
// 						<Form.Control type='email' placeholder='Enter email' />
// 						<Form.Text className='text-muted'>
// 							We'll never share your email with anyone else.
// 						</Form.Text
// 					</Form.Group>

// 					<Form.Group className='mb-3' controlId='formBasicPassword'>
// 						<Form.Label>Password</Form.Label>
// 						<Form.Control type='password' placeholder='Password' />
// 					</Form.Group>
// 					<Form.Group className='mb-3' controlId='formBasicCheckbox'>
// 						<Form.Check type='checkbox' label='Check me out' />
// 					</Form.Group>
// 					<Button type='submit'>Submit</Button>
// 				</Form> */}
// 			</div>
// 		);
// 	} 
// }

// export default Signup;
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Nav from './Nav';
import { BrowserRouter as Link } from 'react-router-dom';

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
		axios.post("https://marketplacelambda.herokuapp.com/api/users/login", this.state)
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
					<h1>Log In</h1>
                    <br/>
                    <br/>
					<div className='page-wrapper'>
						<Form>
							<Form.Group className='mb-3' controlId='formBasicEmail'>
								<Form.Label>Username</Form.Label>
								<Form.Control type='text' placeholder='Enter Username' />
								<Form.Text className='text-muted'>
									Log into your account to add products.
								</Form.Text>
							</Form.Group>

                            <br/>
                            
							<Form.Group className='mb-3' controlId='formBasicPassword'>
								<Form.Label>Password</Form.Label>
								<Form.Control type='password' placeholder='Password' />
							</Form.Group>
							<br />
							<Button type='submit'>Submit</Button>
						</Form>
						<p>
							Don't have an account yet? <a href='/signup'> Sign up.</a>
						</p>
					</div>
				</div>
			</section>
		);
	}
}

export default Signup;