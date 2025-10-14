import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
// DIUBAH: Mengarah ke file CSS yang baru
import './Navigasi.css'; 

// DIUBAH: Nama komponen menjadi Navigasi
const Navigasi = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Yurr</Link>

      <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About Me</Link></li>
        <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>

      <div className="nav-toggler" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

// DIUBAH: Ekspor nama komponen yang baru
export default Navigasi;