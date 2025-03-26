import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"; // Same CSS for both Login & Signup

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "test@example.com" && formData.password === "password123") {
      setError("");
      alert("Login Successful!");
      navigate("/dashboard"); // ✅ लॉगिन के बाद डैशबोर्ड पर भेजें
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>

      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;
