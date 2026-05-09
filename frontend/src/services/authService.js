import API from "./api";
import { jwtDecode } from "jwt-decode";

// ✅ REGISTER
export const registerUser = async (userData) => {
  const res = await API.post("/auth/register", userData);
  return res.data;
};

// ✅ LOGIN
export const loginUser = async (userData) => {
  const res = await API.post("/auth/login", userData);

  const token = res.data.token;

  // ✅ store token
  localStorage.setItem("token", token);

  // 🔥 decode token to get user info
  const decoded = jwtDecode(token);

  const user = {
    id: decoded.id,
    role: decoded.role,
  };

  // ✅ store user
  localStorage.setItem("user", JSON.stringify(user));

  return { token, user };
};

// ✅ LOGOUT
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};