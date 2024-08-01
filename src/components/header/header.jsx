import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./header.css";

const Header = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://images6.alphacoders.com/100/thumb-1920-1002209.jpg"
            width={1500}
            height={500}
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3>Exclusive Deals</h3>
            <p>Check out our latest offers on our menu!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food-2048x1366.jpg"
            width={1500}
            height={700}
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3>Special Offer!</h3>
            <p>Get 30% off on all noodles & salads!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://wallpapercave.com/wp/wp3376127.jpg"
            width={1500}
            height={700}
            alt="Slide 3"
          />
          <Carousel.Caption>
            <h3>Delicious Pizza</h3>
            <p>Enjoy 30% off on Veg Pizza!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Header;
