import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link'; // scroll ke liye
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link smooth to="/#home" onClick={closeMenu}>💈 Royal Salon</Link>
      </div>

      {/* Menu */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><Link smooth to="/#home" onClick={closeMenu}>Home</Link></li>
        <li><Link smooth to="/#services" onClick={closeMenu}>Services</Link></li>
        <li><Link smooth to="/#booking" onClick={closeMenu}>Book Now</Link></li>
        <li><Link smooth to="/#gallery" onClick={closeMenu}>Gallery</Link></li>
        <li><Link smooth to="/#contact" onClick={closeMenu}>Contact</Link></li>
        <li>
          {/* Login alag page hai */}
          <Link className="login-btn" to="/login" onClick={closeMenu}>
            Login
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;