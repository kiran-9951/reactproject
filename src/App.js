import React, { useState } from "react";
import "./index.css";
import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
// import PlaceOrder from "./pages/placeorder/placeorder";
import Footer from "./components/footer/footer";
import LoginPopup from "./components/loginpopup/loginpopup";
const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/order" element={<PlaceOrder />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
