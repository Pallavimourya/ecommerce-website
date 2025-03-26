import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./home.css";

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div className="home">
      <div className="overlay">
        <div className="content">
          <h1>Shop Smarter, Live Better</h1>
          <p  style={{ color: "white" }}>Discover the best deals on your favorite products</p>
          <button className="btn" onClick={() => navigate("/login")}>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
