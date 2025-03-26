import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./bestdeals.css";
import gaminglaptop from "../../assets/img/gaminglaptop.jpg"
import smartwatch from "../../assets/img/smartwatch.jpg"
import speaker from "../../assets/img/speaker.jpg"
import headphone from "../../assets/img/wirelessheadphone.jpg"
import fitness from "../../assets/img/fitnesstracker.jpg"

const usdToInr = (usdPrice) => {
  const conversionRate = 83; // ✅ 1 USD = 83 INR
  return `₹${(usdPrice * conversionRate).toLocaleString("en-IN")}`;
};

const bestDeals = [
  { name: "Gaming Laptop", img: gaminglaptop, oldPrice: usdToInr(1299), newPrice: usdToInr(999), discount: "23%" },
  { name: "Smartwatch", img: smartwatch, oldPrice: usdToInr(249), newPrice: usdToInr(199), discount: "20%" },
  { name: "Bluetooth Speaker", img: speaker, oldPrice: usdToInr(99), newPrice: usdToInr(79), discount: "20%" },
  { name: "Wireless Headphones", img: headphone, oldPrice: usdToInr(199), newPrice: usdToInr(149), discount: "25%" },
  { name: "Fitness Tracker", img: fitness, oldPrice: usdToInr(109), newPrice: usdToInr(89), discount: "18%" },
];

const BestDeals = () => {
  return (
    <div className="best-deals">
      <h2>🔥 Best Deals</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="deals-slider"
      >
        {bestDeals.map((product, index) => (
          <SwiperSlide key={index} className="deal-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="old-price">{product.oldPrice}</p>
            <p className="new-price">{product.newPrice} <span className="discount">-{product.discount}</span></p>
            <button className="btn">Grab Deal</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestDeals;
