import React from "react";
import "./featuredproducts.css";
import headphones from "../../assets/img/wirelessheadphone.jpg";
import console from "../../assets/img/console.jpg";
import smarttv from "../../assets/img/smarttv.jpg";
import tablet from "../../assets/img/tablet.jpg";
import camera from "../../assets/img/camera.jpg";
import coffeemaker from "../../assets/img/coffeemaker.jpg";

const usdToInr = (usdPrice) => {
  const conversionRate = 83; 
  return `₹${(usdPrice * conversionRate).toLocaleString("en-IN")}`;
};

const featuredProducts = [
  { name: "Wireless Headphones", img: headphones, price: usdToInr(199) },
  { name: "Gaming Console", img: console, price: usdToInr(499) },
  { name: "Smart TV", img: smarttv, price: usdToInr(899) },
  { name: "Tablet", img: tablet, price: usdToInr(299) },
  { name: "Camera", img: camera, price: usdToInr(599) },
  { name: "Coffee Maker", img: coffeemaker, price: usdToInr(99) },
];
const FeaturedProducts = () => {
  return (
    <div className="featured-products">
      <h2>🔥 Featured Products</h2>
      <div className="products-grid">
        {featuredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
