import React from 'react';
import './components/style.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <Link to="/" className="logo">Math magician</Link>
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/calculator">calculator</Link></li>
      <li><Link to="/qoute">Qoute</Link></li>
    </ul>
  </nav>
);

export default Navbar;
