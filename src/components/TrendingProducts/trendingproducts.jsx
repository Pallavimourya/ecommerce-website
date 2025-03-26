import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./trendingproducts.css";
import phone from "../../assets/img/smartphone.jpg";
import shoes from "../../assets/img/runningshoes.jpg";
import laptop from "../../assets/img/laptop.jpg";
import watch from "../../assets/img/smartwatch.jpg";
import bag from "../../assets/img/backpack.jpg";

const usdToInr = (usdPrice) => {
  const conversionRate = 83; 
  return `₹${(usdPrice * conversionRate).toLocaleString("en-IN")}`;
};

const products = [
  { name: "Smartphone", img: phone, price: usdToInr(699) },
  { name: "Running Shoes", img: shoes, price: usdToInr(120) },
  { name: "Laptop", img: laptop, price: usdToInr(999) },
  { name: "Smartwatch", img: watch, price: usdToInr(199) },
  { name: "Backpack", img: bag, price: usdToInr(50) },
];
const TrendingProducts = () => {
  return (
    <div className="trending-products">
      <h2>🔥 Trending Products</h2>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingProducts;
