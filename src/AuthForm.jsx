import { useState, useEffect } from "react";

export default function AuthForm({ type, setIsAuthenticated }) {
  // 🔹 Co-located state (used only in this component)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 🔹 Derived State
  const isEmailValid = email.includes("@");
  const isPasswordValid = password.length >= 6;
  const isConfirmValid =
    type === "signup" ? password === confirmPassword : true;

  const isFormValid =
    isEmailValid && isPasswordValid && isConfirmValid;

  // 🔹 Re-render observation
  useEffect(() => {
    console.log("Component Re-rendered");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    alert(`${type.toUpperCase()} Successful!`);
    setIsAuthenticated(true); // 🔹 Lifted state updated
  };

  return (
    <div className="card">
      <h2>{type === "signin" ? "Sign In" : "Sign Up"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isEmailValid && email && (
          <small className="error">Invalid Email</small>
        )}

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isPasswordValid && password && (
          <small className="error">
            Password must be 6+ characters
          </small>
        )}

        {type === "signup" && (
          <>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />
            {!isConfirmValid && confirmPassword && (
              <small className="error">
                Passwords do not match
              </small>
            )}
          </>
        )}

        {/* 🔹 Derived state controlling button */}
        <button disabled={!isFormValid}>
          {type === "signin" ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}
