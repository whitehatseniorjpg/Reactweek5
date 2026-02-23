import { useState, useEffect } from "react";

const SignUp = ({ setRegisteredUser, setShowSignUp }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Derived State
  const isValid = email.includes("@") && password.length >= 6;

  useEffect(() => {
    console.log("SignUp Re-rendered");
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { email, password };

    setRegisteredUser(user);
    localStorage.setItem("registeredUser", JSON.stringify(user));

    alert("Signup Successful!");
    setShowSignUp(false); // go to SignIn
  };

  return (
    <div>
      <h2>Sign Up</h2>

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
          Register
        </button>
      </form>

      <p onClick={() => setShowSignUp(false)} style={{ cursor: "pointer", color: "blue" }}>
        Already have an account? Sign In
      </p>
    </div>
  );
};

export default SignUp;

