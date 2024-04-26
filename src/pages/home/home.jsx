import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/header'
import ExploreMenu from '../../components/exploremenu/exploremenu'
import FoodDisplay from '../../components/fooddisplay/fooddisplay'
import AppDownload from '../../components/appdownload/appdownload'
const Home = () => {
    const[category,setCategory]=useState("All");
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>l̥
        <AppDownload/>
    </div>
  )
}

export default Home