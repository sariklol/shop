import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container nav-flex">
                <Link to="/" className="logo">StoreShop</Link>
                <ul style={{ display: 'flex', gap: '30px', listStyle: 'none' }}>
                    <li>
                        <NavLink
                            to="/"
                            style={({ isActive }) => ({
                                color: isActive ? '#4f46e5' : '#64748b',
                                textDecoration: 'none',
                                fontWeight: 600
                            })}
                        >
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            style={({ isActive }) => ({
                                color: isActive ? '#4f46e5' : '#64748b',
                                textDecoration: 'none',
                                fontWeight: 600
                            })}
                        >
                            Товары
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;