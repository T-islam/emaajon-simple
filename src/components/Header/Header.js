import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            
            <img className='header-logo'src={logo} alt="" />
            <nav id='menu'>
                <a href="./shop ">Shop</a>
                <a href="./addCart"> AddCart</a>
                <a href="./details">Details</a>
                <input type="search" name="" id="search" />
            </nav>
            
        </div>
    );
};

export default Header;