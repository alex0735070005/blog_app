import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

function Header() {
    console.log('RENDER HEADER');
    return (
        <header className="header">
            <ul className="header__menu">
                <li><NavLink className="header__link" to="/" exact >Home</NavLink></li>
                <li><NavLink className="header__link" to="/posts">Posts</NavLink></li>
                <li><NavLink className="header__link" to="/favorite">Favorite</NavLink></li>
            </ul>
        </header>
    );
}

export default Header;