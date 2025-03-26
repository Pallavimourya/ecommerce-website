import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"; // Icons
import "./navbar.css";

const Navbar = ({ cartItemCount = 0 }) => {
  const [showMenu, setShowMenu] = useState(false);

  // ✅ Toggle Menu Function
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  // ✅ Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showMenu &&
        !event.target.closest(".navMenu") &&
        !event.target.closest(".mobMenu")
      ) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showMenu]);

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="logo">
        <h2>TrendsFam</h2>
      </div>

      {/* Center: Desktop Menu */}
      <div className="desktopMenu">
        {[
          "Home",
          "Flash Sale",
          "Trending",
          "Featured",
          "Best Deals",
          "Special Offers",
          "Contact Us",
        ].map((item, index) => (
          <Link
            key={index}
            to={`/${item.toLowerCase().replace(/\s/g, "")}`}
            className="desktopMenuListItem"
          >
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

      {/* ✅ Mobile Menu Button */}

      <button className="mobMenu" onClick={toggleMenu} aria-label="Toggle menu">
        {showMenu ? <FaTimes /> : <FaBars />}
      </button>

      {/* ✅ Mobile Menu (Dropdown) */}
      <div className={`navMenu ${showMenu ? "show" : ""}`}>
        {[
          "Home",
          "Flash Sale",
          "Trending",
          "Featured",
          "Best Deals",
          "Special Offers",
          "Contact Us",
        ].map((item, index) => (
          <Link
            key={index}
            to={`/${item.toLowerCase().replace(/\s/g, "")}`}
            className="listItem"
            onClick={toggleMenu}
          >
            {item}
          </Link>
        ))}
        <Link
          to="/login"
          className="iconContainer listItem"
          onClick={toggleMenu}
        >
          <FaUserPlus className="userIcon" />
          <span className="iconText">Login</span>
        </Link>
        <Link
          to="/cart"
          className="iconContainer listItem"
          onClick={toggleMenu}
        >
          <FaShoppingCart className="cartIcon" />
          <span className="iconText">Cart</span>
        </Link>
        <Link
          to="/menu"
          className="iconContainer listItem"
          onClick={toggleMenu}
        >
          <FaBars className="menuIcon" />
          <span className="iconText">Menu</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
