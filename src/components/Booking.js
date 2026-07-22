import React, { useState } from "react";

import "./Booking.css";

import { createBooking } from "../api/bookingApi";


const Booking = () => {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");


const handleSubmit = async (e) => {
  e.preventDefault();

  setMessage("");
  setError("");
  setLoading(true);

  const bookingData = {
    name: name,
    mobileNumber: mobile,
    service: service,
    bookingDate: date,
    bookingTime: time + ":00",
    status: "PENDING"
  };

  console.log("Sending:", bookingData);

  try {
    const response = await createBooking(bookingData);

    console.log("Booking Response:", response);

    setMessage("Booking Confirmed Successfully ✅");

    setName("");
    setMobile("");
    setService("");
    setDate("");
    setTime("");

  } catch (error) {

    console.error("Booking Error:", error);

    setError(
      error.message || "Server Error ❌"
    );

  } finally {

    setLoading(false);

  }
};
  return (

    <section id="booking">

      <h2>
        Book Appointment
      </h2>

      <p>
        Select date & manage your time
      </p>


      <form
        className="booking-form"
        onSubmit={handleSubmit}
      >


        {/* Name */}

        <label>
          Your Name
        </label>

        <input
          type="text"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          required
        />


        {/* Mobile */}

        <label>
          Mobile Number
        </label>

        <input
          type="tel"
          value={mobile}
          onChange={(e) =>
            setMobile(e.target.value)
          }
          required
        />


        {/* Service */}

        <label>
          Select Service
        </label>

        <select
          value={service}
          onChange={(e) =>
            setService(e.target.value)
          }
          required
        >

          <option value="">
            Select Service
          </option>

          <option value="Hair Cut">
            Hair Cut
          </option>

          <option value="Hair Color">
            Hair Color
          </option>

          <option value="Nail Art">
            Nail Art
          </option>

          <option value="Facial">
            Facial
          </option>

        </select>


        {/* Date */}

        <label>
          Select Date
        </label>

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
          required
        />


        {/* Time */}

        <label>
          Select Time
        </label>

        <input
          type="time"
          value={time}
          onChange={(e) =>
            setTime(e.target.value)
          }
          required
        />


        {/* Submit */}

        <button
          type="submit"
          disabled={loading}
        >

          {loading
            ? "Booking..."
            : "Confirm Booking"
          }

        </button>


        {/* Success */}

        {message && (

          <p className="success-message">
            {message}
          </p>

        )}


        {/* Error */}

        {error && (

          <p className="error-message">
            {error}
          </p>

        )}

      </form>

    </section>

  );

};


export default Booking;