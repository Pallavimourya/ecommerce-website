import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./specialoffers.css";
import buds from "../../assets/img/earbuds.jpg"
import headset from "../../assets/img/headset.jpg"
import smarttv from "../../assets/img/smarttv.jpg";
import band from "../../assets/img/fitnessband.jpg"

const usdToInr = (usdPrice) => {
  const conversionRate = 83;
  return `₹${(usdPrice * conversionRate).toLocaleString("en-IN")}`;
};

const offers = [
  { name: "Wireless Earbuds", img: buds, price: usdToInr(99), oldPrice: usdToInr(150), discount: "33% OFF" },
  { name: "Gaming Headset", img: headset, price: usdToInr(129), oldPrice: usdToInr(200), discount: "35% OFF" },
  { name: "Smart TV", img: smarttv, price: usdToInr(799), oldPrice: usdToInr(999), discount: "20% OFF" },
  { name: "Fitness Band", img: band, price: usdToInr(49), oldPrice: usdToInr(75), discount: "30% OFF" },
];

const SpecialOffers = () => {
  return (
    <div className="special-offers">
      <h2>🎁 Special Discounts & Offers</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Navigation, Autoplay]}
        className="offers-slider"
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index} className="offer-card">
            <img src={offer.img} alt={offer.name} />
            <h3>{offer.name}</h3>
            <p className="old-price">{offer.oldPrice}</p>
            <p className="new-price">{offer.price} <span>{offer.discount}</span></p>
            <button className="btn">Grab Now</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialOffers;
