import "./Footer.css";
import React from "react";

import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-section">
          <h2 className="footer-logo">Royal Salon</h2>
          <p>
            Professional hair & beauty services  
            with luxury experience.
          </p>
        </div>

        {/* Center */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>

            <li>Home </li>
            <li>Services</li>
            <li>Book Now</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-section">
          <h3>Contact</h3>
           <a
                          href="https://maps.app.goo.gl/iKhDd4AZ68JPz4Wi9"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          📍 Royal Salon, Main road, Dulaniya, Rajasthan
                        </a>
            <p>📞{" "}<a href="https://wa.me/+91 7877913352" style={{textDecoration:"none",color:"white"}}>+91 9876543210 </a></p>
         <p>✉️ {" "}<a href="mailto:pooniasumit9785@gmail.com" style={{textDecoration:"none",color:"white"}}>pooniasumit9785@gmail.com</a></p>
               </div>


      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Royal Salon. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;