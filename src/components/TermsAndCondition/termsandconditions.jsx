import React from "react";
import "./termsandconditions.css";

const TermsConditions = () => {
  return (
    <div className="terms-conditions">
      <h2>📜 Terms & Conditions</h2>
      <p>Welcome to Brain Haven Learning! By using our website, you agree to the following terms and conditions.</p>

      <div className="terms-section">
        <h3>1️⃣ Account Registration</h3>
        <p>To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account details.</p>
      </div>

      <div className="terms-section">
        <h3>2️⃣ Pricing & Payments</h3>
        <p>All prices are listed in Indian Rupees (₹) and are subject to change without prior notice. We accept payments through UPI, Net Banking, Debit/Credit Cards, and Wallets.</p>
      </div>

      <div className="terms-section">
        <h3>3️⃣ Order & Cancellation</h3>
        <p>Once an order is placed, it cannot be canceled after confirmation. However, you can request a return or refund as per our <a href="/return-policy">Return Policy</a>.</p>
      </div>

      <div className="terms-section">
        <h3>4️⃣ Shipping & Delivery</h3>
        <p>We ensure timely delivery of products, but unforeseen delays may occur. Check our <a href="/shipping-info">Shipping Policy</a> for more details.</p>
      </div>

      <div className="terms-section">
        <h3>5️⃣ Returns & Refunds</h3>
        <p>We offer a hassle-free return policy within 7 days of delivery. Refunds will be processed within 5-7 business days.</p>
      </div>

      <div className="terms-section">
        <h3>6️⃣ User Conduct</h3>
        <p>Users must not engage in fraudulent activities, misuse our services, or violate any applicable laws.</p>
      </div>

      <div className="terms-section">
        <h3>7️⃣ Privacy Policy</h3>
        <p>Your personal data is protected under our <a href="/privacy-policy">Privacy Policy</a>. We do not share your information with third parties without consent.</p>
      </div>

      <div className="terms-section">
        <h3>8️⃣ Changes to Terms</h3>
        <p>We reserve the right to modify these terms at any time. Continued use of our website implies acceptance of the updated terms.</p>
      </div>

      <div className="terms-section">
        <h3>📞 Contact Us</h3>
        <p>For any queries, email us at <strong>support@brainhaven.com</strong> or call <strong>+91 98765 43210</strong>.</p>
      </div>
    </div>
  );
};

export default TermsConditions;
