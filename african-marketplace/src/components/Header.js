import React from "react";
import {Link} from "react-router-dom";

export default function Head() {

    return (
        <div className='head'>
            <Link className="Nav" to="/">Home</Link>
            <Link className="Nav" to="/login">Login</Link>
            <Link className="Nav" to="/Signup">Sign Up</Link>
            <Link className="Nav" to="/AddProduct">Add Product</Link>
        </div>
    )
}