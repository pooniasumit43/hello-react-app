import React, {useEffect,useState} from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // 1. useLocation add kiya
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
      <section id="home"><Home /></section>
      <section id="services"><Services /></section>
      <section id="gallery"><Gallery /></section>
      <section id="booking"><Booking /></section>
      <section id="contact"><Contact /></section>
      <h2 style={{textAlign: 'center'}}>{message}</h2>
    </>
  )
}

// 2. NAYA COMPONENT BANA DIYA
function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login"; // 3. check karega login hai ya nahi

  return (
    <>
      {!isLoginPage && <Navbar />} {/* 4. Login nahi hai to Navbar dikhao */}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />


      </Routes>

      {!isLoginPage && <Footer />} {/* 5. Login nahi hai to Footer dikhao */}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout /> {/* Navbar/Footer yaha se hata ke Layout me daal diye */}
    </BrowserRouter>
  );
}

export default App;