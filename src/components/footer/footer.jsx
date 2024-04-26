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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            fringilla arcu lorem, sit amet efficitur neque faucibus vitae. Proin
            tempus lectus leo, non fringilla odio faucibus et. Sed suscipit
            tortor risus, quis ultrices nisl iaculis sed. Aenean auctor tempor
            eros, a sollicitudin tortor. Donec ac neque id nulla convallis
            tempus lacinia id diam.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/swiggy.in/" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://twitter.com/swiggy_in" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/company/swiggy/" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>

        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivey</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>1860 8883 6656</li>
                <li>contact@swiggy.com</li>
            </ul>
        </div>
      </div>
      <hr/>  
      <p className="footer-copyright">Copyright 2024@swiggy.com -All right reserved.</p>    
    </div>
    
  );
};

export default Footer;
