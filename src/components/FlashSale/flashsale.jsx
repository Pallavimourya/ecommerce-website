import React from "react";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "../CountdownTimer/countdowntimer";
import "./flashsale.css";
import tvImg from "../../assets/img/smarttv.jpg";
import laptopImg from "../../assets/img/gaminglaptop.jpg";
import headphonesImg from "../../assets/img/wirelessheadphone.jpg";

const usdToInr = (usdPrice) => {
  const conversionRate = 83;
  return `₹${(usdPrice * conversionRate).toLocaleString("en-IN")}`;
};

const flashSaleProducts = [
  { name: "4K Smart TV", img: tvImg, price: usdToInr(599), oldPrice: usdToInr(999) },
  { name: "Gaming Laptop", img: laptopImg, price: usdToInr(899), oldPrice: usdToInr(1299) },
  { name: "Wireless Headphones", img: headphonesImg, price: usdToInr(129), oldPrice: usdToInr(199) },
];

const saleEndTime = new Date().getTime() + 2 * 60 * 60 * 1000;

const FlashSale = () => {
  const navigate = useNavigate();

  return (
    <div className="flash-sale">
      <h2>📢 Flash Sale - Limited Time Only!</h2>
      <CountdownTimer endTime={saleEndTime} />
      <div className="sale-products">
        {flashSaleProducts.map((product, index) => (
          <div key={index} className="sale-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="old-price">{product.oldPrice}</p>
            <p className="new-price">{product.price}</p>
            <button className="btn" onClick={() => navigate("/product-details", { state: { product } })}>
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
