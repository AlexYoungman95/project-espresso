import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styling.scss';

const Navbar = () => (
  <nav className="navbar">
    <ul className="navlist">
      <li className="nav-item"><Link to="/">Home</Link></li>
    </ul>
    <ul className="navlist">
      <li className="nav-item"><Link to="/settings">Settings</Link></li>
    </ul>
  </nav>
)

export default Navbar;
