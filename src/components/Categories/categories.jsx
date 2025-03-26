import React, { useState } from "react";
import "./categories.css";

// ✅ Import Category Images
import electronic from "../../assets/img/electronic.jpg";
import fashion from "../../assets/img/fashion.jpg";
import home from "../../assets/img/home.jpg";
import beauty from "../../assets/img/beauty.jpg";
import sports from "../../assets/img/sports.jpg";

// ✅ Import Product Images
import laptop from "../../assets/img/laptop.jpg";
import smartphone from "../../assets/img/smartphone.jpg";
import tshirt from "../../assets/img/tshirt.jpg";
import sofa from "../../assets/img/sofa.jpg";
import lipstick from "../../assets/img/lipstick.jpg";
import football from "../../assets/img/football.jpg";

// ✅ Categories Data
const categories = [
  { name: "Electronics", img: electronic },
  { name: "Fashion", img: fashion },
  { name: "Home & Furniture", img: home },
  { name: "Beauty & Health", img: beauty },
  { name: "Sports & Outdoors", img: sports },
];

// ✅ Products Data with Images
const products = [
  { id: 1, name: "Laptop", img: laptop, category: "Electronics", price: "₹50,000" },
  { id: 2, name: "Smartphone", img: smartphone, category: "Electronics", price: "₹25,000" },
  { id: 3, name: "T-Shirt", img: tshirt, category: "Fashion", price: "₹800" },
  { id: 4, name: "Sofa Set", img: sofa, category: "Home & Furniture", price: "₹30,000" },
  { id: 5, name: "Lipstick", img: lipstick, category: "Beauty & Health", price: "₹500" },
  { id: 6, name: "Football", img: football, category: "Sports & Outdoors", price: "₹1,500" },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ✅ Selected category ke products filter karein
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : [];

  return (
    <div className="categories">
      <h2>Shop by Categories</h2>

      {/* ✅ Category List */}
      <div className="category-list">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`category-card ${selectedCategory === cat.name ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.name)}
          >
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>

      {/* ✅ Selected Category Heading */}
      {selectedCategory && <h3>Products in {selectedCategory}</h3>}

      {/* ✅ Filtered Products List */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} className="product-img" />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))
        ) : (
          selectedCategory && <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
