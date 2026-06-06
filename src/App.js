import React, {useEffect,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Footer from "./components/Footer";
import axios from "axios";
function App() {
const [message, setMessage]=useState("");
useEffect(()=>{
axios.get("http://localhost:8080/savebooking").then(response=>{
console.log(response.data);
setMessage(response.data);
})
.catch(error => {
console.log("Error:",error);

});
}, []);

  return (
  <>
    <BrowserRouter>
      <Navbar />
      
     
      <Routes>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     
    </BrowserRouter>
    <Footer />
    <h2>{message}</h2>
   </> 
  );
}

export default App;