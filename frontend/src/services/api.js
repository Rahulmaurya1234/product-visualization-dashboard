import axios from "axios";

const api = axios.create({
  baseURL:
    "https://product-visualization-dashboard-r1oe.onrender.com/api",
});

export default api;