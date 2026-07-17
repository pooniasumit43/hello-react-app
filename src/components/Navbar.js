import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/#home" onClick={closeMenu}>💈 Royal Salon</Link>
        {/* smooth hata diya */}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/#home" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/#services" onClick={closeMenu}>Services</Link></li>
        <li><Link to="/#booking" onClick={closeMenu}>Book Now</Link></li>
        <li><Link to="/#gallery" onClick={closeMenu}>Gallery</Link></li>
        <li><Link to="/#contact" onClick={closeMenu}>Contact</Link></li>
        <li>
          <Link className="login-btn" to="/login" onClick={closeMenu}>
            Login
          </Link>
        </li>
      </ul>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;