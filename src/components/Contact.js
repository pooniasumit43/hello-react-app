import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon 😊");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>

      <div className="contact-container">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h3>Salon Address</h3>

              <a
                href="https://maps.app.goo.gl/iKhDd4AZ68JPz4Wi9"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "black" }}
              >
                📍 Royal Salon, Main road, Dulaniya, Rajasthan
              </a>
          <h3>Phone</h3>
          <p>📞{" "}<a href="https://wa.me/+91 7877913352" style={{textDecoration:"none",color:"black"}}>+91 9887451187 </a></p>

          <h3>Email</h3>
          <p>✉️ {" "}<a href="mailto:pooniasumit9785@gmail.com" style={{textDecoration:"none",color:"black"}}>pooniasumit9785@gmail.com</a></p>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* GOOGLE MAP */}
      <div className="map">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Dulania&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;