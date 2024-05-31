import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import './header.css'
const Header = () => {
  return (
  <>
    
    <Carousel>
      <Carousel.Item>
        
        <img src='https://images6.alphacoders.com/100/thumb-1920-1002209.jpg' width={1500} height={700} alt=''></img>

        <Carousel.Caption>
          <h3 ClassName='explore'>Explore Menu</h3>
          <p>Epic Lunch Ensemble</p>
          <p>its time to treate yourself</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
        <img src='https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food-2048x1366.jpg'width={1500} height={700}alt=''></img>
        <Carousel.Caption>
        <p>Epic Lunch Ensemble</p>
          <p>its time to treate yourself</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src='https://wallpapercave.com/wp/wp3376127.jpg'width={1500} height={700} alt=''></img>
        <Carousel.Caption>
        <p>Epic Lunch Ensemble</p>
          <p>its time to treate yourself</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
  )
  
}

export default Header
