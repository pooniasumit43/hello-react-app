import React from "react";
import "./Home.css";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="home-overlay">
        <div className="home-content">
          <h1>Royal Salon</h1>
          <p>
            Best Hair • Beard • Facial • Spa Experience  
            <br />
            Look Good, Feel Confident
          </p>

          <div className="home-buttons">
            <Link to="/booking" className="btn-primary">Book Appointment</Link>
            <Link to="/services" className="btn-secondary">Our Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;