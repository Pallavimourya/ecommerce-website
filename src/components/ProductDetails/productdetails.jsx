import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./productdetails.css";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  const discountPercentage = (
    ((parseFloat(product.oldPrice.replace("₹", "").replace(",", "")) - parseFloat(product.price.replace("₹", "").replace(",", ""))) /
      parseFloat(product.oldPrice.replace("₹", "").replace(",", ""))) *
    100
  ).toFixed(0);

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
      return;
    }
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("✅ Product added to cart!");
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="image-section">
          <img src={product.img} alt={product.name} className="product-img" />
        </div>
        <div className="details-section">
          <h2>{product.name}</h2>
          <p className="old-price">M.R.P: {product.oldPrice}</p>
          <p className="new-price">Price: {product.price} <span className="discount">-{discountPercentage}% OFF</span></p>
          <p className="delivery">🚚 Free Delivery Available</p>
          <button className="btn buy-btn">Buy Now</button>
          <button className="btn cart-btn" onClick={handleAddToCart}>Add to Cart</button>
          <button className="btn back-btn" onClick={() => navigate(-1)}>⬅ Go Back</button>
        </div>
      </div>

      {showLoginPrompt && (
        <div className="login-modal">
          <div className="login-box">
            <h3>🔐 Login Required</h3>
            <p>You need to log in to add items to the cart.</p>
            <button className="btn login-btn" onClick={() => { setIsLoggedIn(true); setShowLoginPrompt(false); }}>Login</button>
            <button className="btn close-btn" onClick={() => setShowLoginPrompt(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
