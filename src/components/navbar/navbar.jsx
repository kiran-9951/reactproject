import React, { useContext, useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/storecontext";
const Navbar = ({setShowLogin}) => {
  const [menu, setmenu] = useState("menu");
  const {getTotalCartAmount}=useContext(StoreContext)
  

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link onClick={()=>setmenu("home")} className={menu==="home" ? "active":""} style={{textDecoration:"none"}}>HOME</Link>
        <a href="#explore-menu" onClick={()=>setmenu("menu")} className={menu==="menu" ? "active":""} style={{textDecoration:"none"}}>MENU</a>
        <a href="#app-download"  onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app" ? "active":""} style={{textDecoration:"none"}}>MOBILE-APP</a>
        <a href="#footer"onClick={()=>setmenu("contact-us")} className={menu==="contact-us" ? "active":""} style={{textDecoration:"none"}}>CONTACT US</a>
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="" /> */}
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          
          <div className={getTotalCartAmount()===0? "":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
