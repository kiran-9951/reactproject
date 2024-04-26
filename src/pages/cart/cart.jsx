import React, { useContext, useState, useEffect } from "react";
import "./cart.css";
import { StoreContext } from "../../context/storecontext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const back = useNavigate();
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(Object.keys(cartItems).length === 0);

  useEffect(() => {
    setIsCartEmpty(Object.keys(cartItems).length === 0);
  }, [cartItems]);

  const handleProceedToCheckout = () => {
    setIsOrdering(true);
    setTimeout(() => {
      setIsOrdering(false);
      setIsOrderPlaced(true);
      setTimeout(() => {
        clearCart();
        setIsOrderPlaced(false);
      }, 3000);
    }, 2000);
  };

  const clearCart = () => {
    for (const itemId in cartItems) {
      removeFromCart(itemId);
    }
    setIsCartEmpty(true);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
    if (Object.keys(cartItems).length === 0) {
      setIsCartEmpty(true);
      back("/");
    }
  };

  return (
    <div className="cart">
      {isCartEmpty ? (
        <div className="empty-cart">
          <img src="https://www.clickscreative.com/images/empty-cart.png" alt="Empty Cart" />
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div>
          {!isOrderPlaced && ( // Only render if order is not placed
            <div className="cart-items">
              <div className="cart-items-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
              </div>
              <br />
              <hr />
              {food_list.map((item, index) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <div className="cart-items-item" key={item._id}>
                      <img src={item.image} alt={item.name} />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>${item.price * cartItems[item._id]}</p>
                      <p onClick={() => handleRemoveFromCart(item._id)} className="cross">
                        x
                      </p>
                    </div>
                  );
                }
              })}
            </div>
          )}
          <div className="cart-bottom">
            {!isOrderPlaced && ( // Only render if order is not placed
              <div className="cart-total">
                <h2>Cart Total</h2>
                <div>
                  <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <p>Delivery fee</p>
                    <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <b>Total</b>
                    <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                  </div>
                </div>
                <button onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</button>

                {isOrdering && (
                  <div className="ordering-animation">
                    <p>Placing your order...</p>
                    {/* Add animation elements as needed */}
                  </div>
                )}
              </div>
            )}
            {isOrderPlaced && (
              <div className="order-placed-message">
                Your order has been placed. Thank you!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
