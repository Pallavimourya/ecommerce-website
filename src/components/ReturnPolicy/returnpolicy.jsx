import React from "react";
import "./returnpolicy.css";

const ReturnPolicy = () => {
  return (
    <div className="return-policy">
      <h2>🔄 Return & Refund Policy</h2>
      <p>We strive to provide the best shopping experience for our customers. If you are not satisfied with your purchase, you can return or exchange it based on the following policies.</p>

      <div className="policy-section">
        <h3>📅 Return Period</h3>
        <p>Products can be returned within <strong>10 days</strong> of delivery.</p>
      </div>

      <div className="policy-section">
        <h3>📦 Eligibility for Returns</h3>
        <ul>
          <li>Item must be in its original condition with tags and packaging.</li>
          <li>Electronics and appliances must be returned in their original box with all accessories.</li>
          <li>Fashion, beauty, and health products should be unused and unwashed.</li>
        </ul>
      </div>

      <div className="policy-section">
        <h3>💰 Refund Process</h3>
        <p>Once the returned item is received and inspected, refunds will be processed within <strong>5-7 business days</strong> to the original payment method.</p>
      </div>

      <div className="policy-section">
        <h3>🚚 How to Initiate a Return?</h3>
        <p>Follow these steps to return your item:</p>
        <ol>
          <li>Go to <strong>My Orders</strong> and select the item you want to return.</li>
          <li>Choose a return reason and select a refund method.</li>
          <li>Schedule a pickup or drop off the item at a return center.</li>
          <li>Once we receive the item, the refund will be processed.</li>
        </ol>
      </div>

      <div className="policy-section">
        <h3>📞 Need Help?</h3>
        <p>Contact our support team at <strong>support@trendsfam.com</strong> or call <strong>+91 98765 43210</strong>.</p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
