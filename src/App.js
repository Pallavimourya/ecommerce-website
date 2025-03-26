import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import TrendingProducts from "./components/TrendingProducts/trendingproducts";
import FeaturedProducts from "./components/FeaturedProducts/featuredproducts";
import NewArrivals from "./components/NewArrivals/newarrivals";
import BestDeals from "./components/BestDeals/bestdeals";
import SpecialOffers from "./components/SpecialOffers/specialoffers";
import FlashSale from "./components/FlashSale/flashsale";
import Footer from "./components/Footer/footer";
import SignUp from "./components/SignUp/signup";
import Login from "./components/Login/login";
import Categories from "./components/Categories/categories";
import ContactUs from "./components/Contactus/contactus";
import ProductDetails from "./components/ProductDetails/productdetails";
import FAQs from "./components/Faqs/faqs";
import ShippingInfo from "./components/ShippingInfo/shippinginfo";
import TermsConditions from "./components/TermsAndCondition/termsandconditions";
import ReturnPolicy from "./components/Returnpolicy/returnpolicy";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<><Home /><Categories /><FlashSale/></>} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/flashsale" element={<FlashSale />} />  
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/trending" element={<TrendingProducts />} />
        <Route path="/featured" element={<FeaturedProducts />} />
        <Route path="/newarrivals" element={<NewArrivals />} />
        <Route path="/bestdeals" element={<BestDeals />} />
        <Route path="/specialoffers" element={<SpecialOffers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/shippinginfo" element={<ShippingInfo/>} />
        <Route path="/termsandconditions" element={<TermsConditions/>} />
        <Route path="/returnpolicy" element={<ReturnPolicy/>} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
