import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { food_list } from '../../assets/assets'; // Adjust the path as needed
import { StoreContext } from '../../context/storecontext';
import './foodDetail.css';

import addIconGreen from '../../assets/add_icon_green.png';
import removeIconRed from '../../assets/remove_icon_red.png';

const FoodDetail = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);
  const foodItem = food_list.find(item => item._id === id);

  if (!foodItem) {
    return <div>Food item not found</div>;
  }

  const cartItemQuantity = cartItems[id] || 0;
  const price = foodItem.price || 'Price not available'; // Provide a fallback for the price

  const handleAddToCart = () => {
    addToCart(id);
    window.alert(`${foodItem.name} added to cart`);
  };

  const handleRemoveFromCart = () => {
    if (cartItemQuantity > 0) {
      removeFromCart(id);
      window.alert(`${foodItem.name} removed from cart`);
    }
  };

  return (
    <div className="food-detail">
      <h1 className="food-name">{foodItem.name}</h1>
      <img src={foodItem.image} alt={foodItem.name} className="food-image" />
      <p className="food-description">{foodItem.description}</p>
      <p className="food-price">{price}</p>
      <div className="cart-buttons">
        <button onClick={handleRemoveFromCart} disabled={cartItemQuantity === 0}>
          <img src={removeIconRed} alt="Remove" className="cart-icon" />
        </button>
        <span>{cartItemQuantity}</span>
        <button onClick={handleAddToCart}>
          <img src={addIconGreen} alt="Add" className="cart-icon" />
        </button>
      </div>
    </div>
  );
};

export default FoodDetail;
