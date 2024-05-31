import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo} alt="" />
          <p>
            A food website project will feature categorized sections for salads,
            ice creams, rolls, and sandwiches, offering diverse recipes with
            high-quality photos and detailed instructions. Each category will
            include nutritional information and cater to various dietary
            preferences. Users can engage through reviews, ratings, and forums,
            while a blog provides cooking tips and food trends. The site will
            also offer customization options and user-submitted recipes to
            enhance community interaction.
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/swiggy.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a
              href="https://twitter.com/swiggy_in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com/company/swiggy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>1860 8883 6656</li>
            <li>contact@food.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024@food.com -All right reserved.
      </p>
    </div>
  );
};

export default Footer;
