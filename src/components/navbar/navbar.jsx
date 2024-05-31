import React, { useContext, useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/storecontext";
import { food_list } from "../../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [menu, setmenu] = useState("menu");
  const { getTotalCartAmount } = useContext(StoreContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim()) {
      const results = food_list.filter(item =>
        item.name.toLowerCase().includes(query)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (itemId) => {
    navigate(`/food/${itemId}`);
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setmenu("home")} className={menu === "home" ? "active" : ""} style={{ textDecoration: "none" }}>HOME</Link>
        <Link to="/menu" onClick={() => setmenu("menu")} className={menu === "menu" ? "active" : ""} style={{ textDecoration: "none" }}>MENU</Link>
        {/* <a href="#app-download" onClick={() => setmenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""} style={{ textDecoration: "none" }}>MOBILE-APP</a> */}
        <a href="#footer" onClick={() => setmenu("contact-us")} className={menu === "contact-us" ? "active" : ""} style={{ textDecoration: "none" }}>CONTACT US</a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={handleSearch} 
          />
          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map(item => (
                <div 
                  key={item._id} 
                  className="search-result-item" 
                  onClick={() => handleResultClick(item._id)}
                >
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="navbar-cart">
          <Link to='/cart'><img src={assets.basket_icon} alt="basket" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
