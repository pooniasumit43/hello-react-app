import React, {useEffect,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { HashLink as Link } from 'react-router-hash-link'; // smooth scroll ke liye
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Footer from "./components/Footer";
import axios from "axios";

// YE HAI TERA SINGLE PAGE
function MainPage() {
  const [message, setMessage] = useState("");

  useEffect(()=>{
    axios.get("http://localhost:8080/savebooking")
      .then(response=>{
        setMessage(response.data);
      })
      .catch(error => {
        console.log("Error:",error);
      });
  }, []);

  return (
    <>
      {/* HAR SECTION KO ID DENA ZARURI HAI */}
      <section id="home">
        <Home />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="booking">
        <Booking />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <h2 style={{textAlign: 'center'}}>{message}</h2>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar sab page pe rahega */}

      <Routes>
        <Route path="/" element={<MainPage />} />  {/* Ye wala single page */}
        <Route path="/login" element={<Login />} /> {/* Ye alag page */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;