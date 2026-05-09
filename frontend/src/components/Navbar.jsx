import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b shadow-sm px-10 py-4 flex justify-between items-center sticky top-0 z-50">

      {/* LOGO */}
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-bold text-blue-600 cursor-pointer"
      >
        Placement Portal
      </h1>

      {/* LINKS */}
      <div className="flex items-center gap-6 text-gray-700 font-medium">

        <Link to="/" className="hover:text-blue-600 transition">
          Home
        </Link>

        <Link to="/about" className="hover:text-blue-600 transition">
          About
        </Link>

        <Link to="/contact" className="hover:text-blue-600 transition">
          Contact
        </Link>

        {!user ? (
          <>
            <Link
              to="/login"
              className="px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Signup
            </Link>
          </>
        ) : (
          <>
            {/* ROLE BADGE */}
            <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
              {user?.role === "admin" ? "Admin" : "Student"}
            </span>

            {/* DASHBOARD */}
            {user?.role === "admin" ? (
              <Link
                to="/admin"
                className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
              >
                Admin Panel
              </Link>
            ) : (
              <Link
                to="/student"
                className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
              >
                Dashboard
              </Link>
            )}

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;