import { useState, useEffect } from "react";

const SignIn = ({ setIsAuthenticated, setShowSignUp }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isValid = email !== "" && password !== "";

  useEffect(() => {
    console.log("SignIn Re-rendered");
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setIsAuthenticated(true);
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <div>
      <h2>Sign In</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit" disabled={!isValid}>
          Login
        </button>

        <p style={{ color: "red" }}>{error}</p>
      </form>

      <p onClick={() => setShowSignUp(true)} style={{ cursor: "pointer", color: "blue" }}>
        Don't have an account? Sign Up
      </p>
    </div>
  );
};

export default SignIn;

