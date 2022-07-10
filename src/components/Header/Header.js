import React from 'react';
import logo from '../../images/logo.png';
import './header.css';
import { Outlet, Link } from "react-router-dom";
const Header = () => {
    return (
        <div className='header'>
            
            <img className='header-logo'src={logo} alt="" />
            <nav id='menu'>
                
                <Link className='nav-link' to='/shop'>Shop</Link>
                <Link className='nav-link' to='/addCart'>AddCart</Link>
                <Link className='nav-link' to='/details'>Details</Link>
                
                <input type="search" name="" id="search" />
            </nav>
            
        </div>
    );
};

export default Header;