import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";

import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* AUTH ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* STUDENT ROUTE */}
          <Route
            path="/student"
            element={
              <ProtectedRoute role="student">
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          {/* ADMIN ROUTE */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* 404 PAGE */}
          <Route
            path="*"
            element={
              <h1 className="text-center mt-20 text-2xl">
                404 - Page Not Found
              </h1>
            }
          />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;