import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    const loginButton = localStorage.getItem("token") ? (
        <li><button className="buttonNavbar" onClick={handleLogout}>LOGOUT</button></li>
    ) : (
        <li><NavLink to="/login">LOGIN</NavLink></li>
    );

    return (
        <div className="navbar_container">
            <div className="navbar_logo">
                <Link to="/">
                    <img src="MindfulHub_LatestLogo.png" alt="MindfulHub Logo" />
                </Link>
                <h1 className="navbar_header">
                    <Link to="/" className="navbar_link">MindfulHub</Link>
                </h1>
            </div>
            
            {/* Hamburger Icon */}
            <div className="hamburger_icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            {/* Navbar Links */}
            <ul className={`navbar_ul ${isMenuOpen ? 'open' : ''}`}>
                <li><NavLink to="/blog">BLOGS</NavLink></li>
                <li><NavLink to="/questionnaireForm">TEST</NavLink></li>
                <li><NavLink to="/chat">CHAT</NavLink></li>
                {loginButton}
            </ul>
        </div>
    );
};

export default Navbar;