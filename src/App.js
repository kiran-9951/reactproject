import React, { useState } from "react";
import "./index.css";
import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import Footer from "./components/footer/footer";
import LoginPopup from "./components/loginpopup/loginpopup";
import FoodDetail from "./pages/fooddetail/foodDetail";
import Menu from "./pages/menu/menu";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import ItemDetail from "./pages/Itemdetail/itemdetail";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    <ToastContainer/>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food/:id" element={<FoodDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/menu" element={<Menu />} /> 
        <Route path="/item/:id" element={<ItemDetail/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
