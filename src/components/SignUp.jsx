import { useState } from "react";
import Skeleton from "./Skeleton";

export default function SignUp({ onAuthenticate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid =
    email.includes("@") &&
    password.length >= 6 &&
    password === confirmPassword;

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

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button disabled={!isFormValid}>
            Sign Up
          </button>
        </>
      )}
    </form>
  );
}
