import React, { useState } from "react";
import './loginpopup.css'
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin, userLoggedIn }) => {
  const [currState, setCurrState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSignIn = (e) => {
  e.preventDefault();

  console.log("Handling sign-in...");

  try {
    // Save user information to session storage
    sessionStorage.setItem('userEmail', email);
    sessionStorage.setItem('userPassword', password);

    console.log("User information saved to session storage");

    // Clear email and password fields
    setEmail("");
    setPassword("");

    // Close login popup
    setShowLogin(false);
  } catch (error) {
    console.error("Error saving user information:", error.message);
  }
};


  const handleOrder = () => {
    if (userLoggedIn) {
      console.log("Placing order...");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSignIn}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="your name"
              required
            />
          )}

          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          {currState === "Sign up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create an account?{" "}
            <span onClick={() => setCurrState("Sign up")}>click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login</span>
          </p>
        )}
      </form>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default LoginPopup;
