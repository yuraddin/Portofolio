import React from 'react';
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Yurr</Link> {/* Mengarah ke Halaman Utama */}
      <ul className="nav-menu">
        {/* Link ini sekarang akan mengubah URL tanpa me-refresh halaman */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;