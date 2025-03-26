import React, { useState } from "react";
import "./faqs.css";

const faqsData = [
  { question: "📦 What is the return policy?", answer: "You can return the product within 10 days of delivery for a full refund." },
  { question: "🚚 How long does delivery take?", answer: "Standard delivery takes 3-5 business days. Express delivery is available in select locations." },
  { question: "💳 What payment methods are accepted?", answer: "We accept UPI, Credit/Debit Cards, Net Banking, Wallets, and COD (Cash on Delivery)." },
  { question: "🔄 Can I exchange a product?", answer: "Yes, you can exchange eligible products within 7 days of receiving them." },
  { question: "📞 How can I contact customer support?", answer: "You can reach us via email at support@trendsfam.com or call our 24/7 helpline." }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h2>❓ Frequently Asked Questions</h2>
      <div className="faqs-list">
        {faqsData.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">{faq.question}</div>
            <div className="faq-answer">{openIndex === index && <p>{faq.answer}</p>}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
