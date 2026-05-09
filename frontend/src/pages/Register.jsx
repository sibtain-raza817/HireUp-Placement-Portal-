import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!name || !email || !password) {
      return alert("All fields are required ❌");
    }

    if (password.length < 6) {
      return alert("Password must be at least 6 characters ❌");
    }

    try {
      setLoading(true);

      await registerUser({
        name,
        email,
        password,
        role,
      });

      alert("Registered Successfully ✅");
      navigate("/login");

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Registration Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h2>

        {/* ROLE TOGGLE */}
        <div className="flex mb-5 border rounded-lg overflow-hidden">
          <button
            onClick={() => setRole("student")}
            className={`w-1/2 py-2 font-medium transition ${
              role === "student"
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
            }`}
          >
            Student
          </button>

          <button
            onClick={() => setRole("admin")}
            className={`w-1/2 py-2 font-medium transition ${
              role === "admin"
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
            }`}
          >
            Admin
          </button>
        </div>

        {/* INPUTS */}
        <input
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BUTTON */}
        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Creating Account..." : "Signup"}
        </button>

        {/* LINK */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;