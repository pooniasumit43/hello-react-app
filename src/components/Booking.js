import React, { useState } from "react";

import "./Booking.css";

const Booking = () => {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [minutes, setMinutes] = useState(20);
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");



const handleSubmit = async (e) => {
  e.preventDefault();

const bookingData = {
  name: name,
  phone: mobile,  // model me 'phone' hai
  service: service,
  duration: Number(minutes),  // Number kar de, parseInt ki jagah
  bookingTime: date + "T" + time + ":00", // "2026-05-01T10:30:00"
  status: "PENDING"
};


  console.log("Sending:", bookingData); // Debug ke liye

  try {
    const res = await fetch("http://localhost:5172/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"  // 🔥 Ye line zaruri hai
      },
      body: JSON.stringify(bookingData)
    });

    const text = await res.text();
    console.log("Status:", res.status, "Response:", text);

    if(res.ok) {
      alert("Booking Confirmed ✅");
      setName(""); setMobile(""); setService("");
      setDate(""); setTime(""); setMinutes(20);
    } else {
      alert("Error: " + text);
    }

  } catch (error) {
    console.error(error);
    alert("Server Error ❌");
  }
};

  return (
    <section className="booking">
      <h2>Book Appointment</h2>
      <p>Select date & manage your time</p>
      <form className="booking-form" onSubmit={handleSubmit}>

        <label>Your Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Mobile Number</label>
        <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} required />

        <label>Select Service</label>
        <select value={service} onChange={(e) => setService(e.target.value)} required>
          <option value="">Select Service</option>
          <option value="Hair Cut">Hair Cut</option>
          <option value="Hair Color">Hair Color</option>
          <option value="Nail Art">Nail Art</option>
          <option value="Facial">Facial</option>
        </select>

        <label>Select Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <label>Select Time</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

        <label>Service Duration (minutes)</label>
        <select value={minutes} onChange={(e) => setMinutes(e.target.value)}>
          <option value={20}>20 Minutes</option>
          <option value={40}>40 Minutes</option>
          <option value={60}>60 Minutes</option>
          <option value={90}>90 Minutes</option>
        </select>

        <button type="submit">Confirm Booking</button>
      </form>
    </section>
  );
};

export default Booking;