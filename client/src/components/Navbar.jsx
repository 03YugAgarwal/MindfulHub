import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const loginButton = localStorage.getItem("token") ? (
    <li>
      <button onClick={handleLogout}>LOGOUT</button>
    </li>
  ) : (
    <li>
      <NavLink to="/login">LOGIN</NavLink>
    </li>
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
      <ul className="navbar_ul">
        <li>
          <NavLink to="/blog">BLOGS</NavLink>
        </li>
        <li>
          <NavLink to="/questionnaireForm">TEST</NavLink>
        </li>
        <li>
          <NavLink to="/chat">CHAT</NavLink>
        </li>
        {loginButton}
      </ul>
    </div>
  );
};

export default Navbar;
