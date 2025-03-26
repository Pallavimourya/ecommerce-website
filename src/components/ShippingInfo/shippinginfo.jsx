import React from "react";
import "./shippinginfo.css";

const ShippingInfo = () => {
  return (
    <div className="shipping-info">
      <h2>🚚 Shipping Information</h2>
      <p>We offer fast and reliable delivery to ensure you get your products on time. Below are our shipping policies:</p>

      <div className="shipping-section">
        <h3>📦 Shipping Time</h3>
        <ul>
          <li>Standard Delivery: <strong>5-7 business days</strong></li>
          <li>Express Delivery: <strong>2-3 business days</strong></li>
          <li>Same-Day Delivery: Available in selected cities</li>
        </ul>
      </div>

      <div className="shipping-section">
        <h3>💰 Shipping Charges</h3>
        <p>We offer free shipping on orders above <strong>₹999</strong>. Below are the charges for other orders:</p>
        <ul>
          <li>Orders below ₹999: <strong>₹50</strong> shipping fee</li>
          <li>Express Delivery: <strong>₹150</strong> extra</li>
          <li>Same-Day Delivery: <strong>₹199</strong> (only for selected locations)</li>
        </ul>
      </div>

      <div className="shipping-section">
        <h3>📍 Delivery Locations</h3>
        <p>We deliver across India, including metro cities, towns, and rural areas.</p>
      </div>

      <div className="shipping-section">
        <h3>🔍 Track Your Order</h3>
        <p>Once your order is shipped, you will receive a tracking number via email and SMS. You can track your order <a href="/track-order">here</a>.</p>
      </div>

      <div className="shipping-section">
        <h3>📞 Need Help?</h3>
        <p>For shipping-related queries, contact our support team at <strong>support@brainhaven.com</strong> or call <strong>+91 98765 43210</strong>.</p>
      </div>
    </div>
  );
};

export default ShippingInfo;
