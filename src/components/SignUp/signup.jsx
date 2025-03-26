import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css"; // Same CSS for both Login & Signup

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password && formData.name) {
      setError("");
      alert("Signup Successful!");
      navigate("/"); // ✅ Signup के बाद Login Page पर भेजें
    } else {
      setError("All fields are required!");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>

      <p>Already have an account? <Link to="/">Login</Link></p>
    </div>
  );
};

export default Signup;
