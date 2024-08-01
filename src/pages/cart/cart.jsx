import React, { useContext, useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { StoreContext } from "../../context/storecontext";
import { useNavigate } from "react-router-dom";
import crossIcon from "../../assets/cross_icon.png"; // Adjust the path as needed
import "./cart.css";

const Cart = () => {
  const back = useNavigate();
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    addToCart,
  } = useContext(StoreContext);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(
    Object.keys(cartItems).length === 0
  );

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

  const handleIncrementQuantity = (itemId) => {
    addToCart(itemId);
  };

  const handleDecrementQuantity = (itemId) => {
    if (cartItems[itemId] > 1) {
      removeFromCart(itemId);
    }
  };

  return (
<div className="cart">
  {isCartEmpty ? (
    <div className="empty-cart">
      <img src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-28/90/empty_cart-512.png" alt="Empty Cart" />
      <p>Your cart is empty</p>
    </div>
  ) : (
    <div>
      {!isOrderPlaced && ( // Only render if order is not placed
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                {/* <th>Remove</th> */}
              </tr>
            </thead>
            <tbody>
              {food_list.map((item) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <tr key={item._id}>
                      <td>
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                      </td>
                      <td>{item.name}</td>
                      <td>₹{item.price}</td>
                      <td>
                        <Button variant="outline-secondary" onClick={() => handleDecrementQuantity(item._id)}>-</Button>
                        <span className="mx-2">{cartItems[item._id]}</span>
                        <Button variant="outline-secondary" onClick={() => handleIncrementQuantity(item._id)}>+</Button>
                      </td>
                      <td>₹{item.price * cartItems[item._id]}</td>
                      {/* <td>
                        <Button variant="link" onClick={() => handleRemoveFromCart(item._id)}>
                          <img src={crossIcon} alt="Remove" className="remove-icon" />
                        </Button>
                      </td> */}
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </Table>
        </div>
      )}
      <div className="cart-bottom">
        {!isOrderPlaced && ( // Only render if order is not placed
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery fee</p>
                <p>₹{getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
              </div>
            </div>
            <Button onClick={handleProceedToCheckout} variant="primary">PROCEED TO CHECKOUT</Button>

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
