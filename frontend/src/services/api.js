import axios from "axios";

// ✅ Create axios instance
const API = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 10000, // ⏱️ 10 sec timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Attach token to every request
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");

    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
  },
  (error) => Promise.reject(error)
);

// ✅ Handle global errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // 🔴 Unauthorized (Token expired)
      if (error.response.status === 401) {
        console.log("Session expired ❌");

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // ✅ React-friendly redirect
        window.location.href = "/login";
      }

      // 🔴 Server errors
      if (error.response.status === 500) {
        console.log("Server error ⚠️");
      }
    }

    return Promise.reject(error);
  }
);

export default API;