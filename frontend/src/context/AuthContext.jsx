import { createContext, useContext, useState, useEffect } from "react";

// CREATE CONTEXT
const AuthContext = createContext();

// PROVIDER
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // LOAD USER FROM STORAGE
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.error("Invalid user data", err);
      localStorage.removeItem("user");
    } finally {
      setLoading(false);
    }
  }, []);

  // LOGIN
  const login = (userData, token) => {
    localStorage.setItem("user", JSON.stringify(userData));
    if (token) {
      localStorage.setItem("token", token);
    }
    setUser(userData);
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// CUSTOM HOOK
export const useAuth = () => {
  return useContext(AuthContext);
};