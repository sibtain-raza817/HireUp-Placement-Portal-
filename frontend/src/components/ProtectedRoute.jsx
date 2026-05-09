import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // ❌ Not logged in
  if (!token) {
    return <Navigate to="/login" />;
  }

  // ❌ Role-based protection (optional but powerful)
  if (role && user?.role !== role) {
    return <Navigate to="/login" />;
  }

  // ✅ Allowed
  return children;
}

export default ProtectedRoute;