import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth(); // 🔥 context

  const handleLogin = async () => {
  if (!email || !password) {
    return alert("All fields are required ❌");
  }

  try {
    setLoading(true);

    const res = await loginUser({ email, password });

    const { user, token } = res;

    if (!user || !user.role || !token) {
      alert("Invalid login response ❌");
      return;
    }

    // ✅ SAVE IN CONTEXT + LOCALSTORAGE
    login(user, token);

    alert("Login Success ✅");

    // REDIRECT
    if (user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/student");
    }

  } catch (err) {
    console.error("LOGIN ERROR:", err.response?.data || err.message);
    alert(err.response?.data?.message || "Login Failed ❌");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        {/* EMAIL */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Email"
        />

        {/* PASSWORD */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Password"
        />

        {/* BUTTON */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* LINK */}
        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;