import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa"; // Login Icon
import { FaShoppingCart } from "react-icons/fa"; // Cart Icon
import "./navbar.css";

const Navbar = ({ cartItemCount = 0 }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.style.overflow = showMenu ? "auto" : "hidden";
  };

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="logo">
        <h2>TrendsFam</h2>
      </div>

      {/* Center: Menu (Hidden on Mobile) */}
      <div className="desktopMenu">
        {["Home", "Flash Sale", "Trending", "Featured", "Best Deals", "Special Offers", "Contact Us"].map((item, index) => (
          <Link key={index} to={`/${item.toLowerCase().replace(/\s/g, "")}`} className="desktopMenuListItem">
            {item}
          </Link>
        ))}
      </div>

      {/* Right: Login & Cart */}
      <div className="rightMenu">
        <Link to="/login" className="iconContainer">
          <FaUserPlus className="userIcon" />
          <span className="iconText">Login</span>
        </Link>
        <Link to="/cart" className="iconContainer">
          <FaShoppingCart className="cartIcon" />
          <span className="iconText">Cart</span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="mobMenu" onClick={toggleMenu} aria-label="Toggle menu">
        ☰
      </button>

      {/* Mobile Menu (Dropdown) */}
      <div className={`navMenu ${showMenu ? "show" : ""}`}>
        {["Home", "Flash Sale", "Trending", "Featured", "Best Deals", "Special Offers", "Contact Us"].map((item, index) => (
          <Link key={index} to={`/${item.toLowerCase().replace(/\s/g, "")}`} className="listItem" onClick={toggleMenu}>
            {item}
          </Link>
        ))}
        <Link to="/login" className="iconContainer listItem" onClick={toggleMenu}>
          <FaUserPlus className="userIcon" />
          <span className="iconText">Login</span>
        </Link>
        <Link to="/cart" className="iconContainer listItem" onClick={toggleMenu}>
          <FaShoppingCart className="cartIcon" />
          <span className="iconText">Cart</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
