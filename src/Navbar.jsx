import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <Link to="home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            {/* <a to="/home">Home</a>
            <a to="/about">About</a>
            <a to="/contact">Contact</a> */}
        </div>
    );
}


// for the to we will give the / slash it will give oane advantage
// for nested we will not give /