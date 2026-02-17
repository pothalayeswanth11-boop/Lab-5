import { useState, useEffect } from "react";
import Skeleton from "./Skeleton";

export default function SignIn({ onAuthenticate }) {
  // 🎯 Co-located State (Used only here)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 📌 Derived State (computed value)
  const isFormValid = email.includes("@") && password.length >= 6;

  useEffect(() => {
    console.log("SignIn Re-rendered");
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      onAuthenticate({ email });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button disabled={!isFormValid}>
            Sign In
          </button>
        </>
      )}
    </form>
  );
}
