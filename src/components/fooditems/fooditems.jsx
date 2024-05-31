import React, { useContext } from "react";
import "./fooditems.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/storecontext";

const FoodItems = ({ id, name, description, price, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const handleAddToCart = (itemId) => {
    addToCart(itemId);
    alert("Item added to cart");
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
    alert("Item removed from cart");
  };

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {!cartItems[id] ? (
          <img
            onClick={() => handleAddToCart(id)}
            className="add"
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => handleRemoveFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove from cart"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => handleAddToCart(id)}
              src={assets.add_icon_green}
              alt="Add to cart"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItems;
