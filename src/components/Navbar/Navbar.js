import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav>
                <NavLink className='nav-link' to='/shop'>Shop</NavLink>
                <NavLink className='nav-link' to='/addCart'>AddCart</NavLink>
                <NavLink className='nav-link' to='/details'>Details</NavLink>
        </nav>
    );
};

export default Navbar;