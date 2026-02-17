import { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import AuthForm from "./AuthForm";

export default function App() {
  // 🔹 LIFTED STATE (shared between pages)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="container">
      <h1>React Authentication Demo</h1>

      {isAuthenticated ? (
        <>
          <h2>Welcome! You are logged in ✅</h2>
          <button onClick={() => setIsAuthenticated(false)}>
            Logout
          </button>
        </>
      ) : (
        <>
          <nav>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>

          <Routes>
            <Route
              path="/signin"
              element={
                <AuthForm
                  type="signin"
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <AuthForm
                  type="signup"
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
            />
            <Route path="*" element={<Navigate to="/signin" />} />
          </Routes>
        </>
      )}
    </div>
  );
}
