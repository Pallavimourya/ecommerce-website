import React from "react";
import "./newarrivals.css";
import speaker from "../../assets/img/speaker.jpg"
import smartglasses from "../../assets/img/smartglasses.jpg"
import buds from "../../assets/img/earbuds.jpg"
import gamingmouse from "../../assets/img/gamingmouse.jpg"
import fitness from "../../assets/img/fitnesstracker.jpg"

const usdToInr = (usdPrice) => {
  const conversionRate = 83; // ✅ 1 USD = 83 INR
  return `₹${(usdPrice * conversionRate).toLocaleString("en-IN")}`;
};

const newArrivals = [
  { name: "Bluetooth Speaker", img: speaker, price: usdToInr(79) },
  { name: "Smart Glasses", img: smartglasses, price: usdToInr(199) },
  { name: "Wireless Earbuds", img: buds, price: usdToInr(129) },
  { name: "Gaming Mouse", img: gamingmouse, price: usdToInr(49) },
  { name: "Fitness Tracker", img: fitness, price: usdToInr(89) },
];


const NewArrivals = () => {
  return (
    <div className="new-arrivals">
      <h2>🆕 New Arrivals</h2>
      <div className="arrivals-grid">
        {newArrivals.map((product, index) => (
          <div key={index} className="arrival-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="btn">Shop Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
