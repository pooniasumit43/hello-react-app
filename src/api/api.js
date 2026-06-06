import axios from "axios";

const API =axios.create({baseURL:"http://localhost:5172/api/bookings",})

export default API;