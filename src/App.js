import React, { useState } from "react";
import "./index.css";
import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import Footer from "./components/footer/footer";
import LoginPopup from "./components/loginpopup/loginpopup";
import FoodDetail from "./pages/fooddetail/foodDetail";
import Menu from "./pages/menu/menu"; // New menu component

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food/:id" element={<FoodDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/menu" element={<Menu />} /> {/* New route for menu */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
