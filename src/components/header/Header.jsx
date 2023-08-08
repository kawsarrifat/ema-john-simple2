import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo}></img>
            <nav>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Manage invenory</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;