import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // React Router navigation

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake authentication (replace with API call)
    if (email === "user@example.com" && password === "password") {
      alert("Login Successful!");
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="login-page"> {/* Apply background only to login page */}
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Login</button>
        </form>
        <div className="text-center mt-3">
          <button className="btn btn-link" onClick={() => navigate("/forgot-password")}>Forgot Password?</button>
        </div>
        <div className="text-center mt-2">
          <p>Don't have an account? <button className="btn btn-link" onClick={() => navigate("/register")}>Register here</button></p>
        </div>
      </div>
    </div>
  );
  
};

export default Login;
