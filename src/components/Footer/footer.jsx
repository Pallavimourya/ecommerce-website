import React from "react";
import "./footer.css";
import fb from "../../assets/img/fb.jpg";
import insta from "../../assets/img/insta.jpg";
import twitter from "../../assets/img/twitter.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ✅ About Section */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p style={{ color: "white" }}>
            Your one-stop destination for quality products at unbeatable prices.
          </p>
        </div>

        {/* ✅ Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/categories">Categories</a>
            </li>
            <li>
              <a href="/specialoffers">Offers</a>
            </li>
            <li>
              <a href="/contactus">Contact</a>
            </li>
          </ul>
        </div>

        {/* ✅ Customer Support */}
        <div className="footer-section support">
          <h3>Customer Support</h3>
          <ul>
            <li>
              <a href="/faqs">FAQs</a>
            </li>
            <li>
              <a href="/returnpolicy">Return Policy</a>
            </li>
            <li>
              <a href="/shippinginfo">Shipping Info</a>
            </li>
            <li>
              <a href="/termsandconditions">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* ✅ Contact Section */}
        <div className="footer-section contact">
        <h3>Contact Us</h3>
         <p  style={{ color: "white" }}>Email: support@trendsfam.com</p>
         <p  style={{ color: "white" }}>Phone: +91 98735 47210</p>
        </div>

        {/* ✅ Social Media */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fb} alt="Facebook" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="Instagram" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Copyright */}
      <div className="footer-bottom">
        <p  style={{ color: "black" }}>
          &copy; {new Date().getFullYear()} YourEcommerce. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
