import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                    >
                       <p>Inicio</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/favorites"
                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                    >
                        <p>Favoritas</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
