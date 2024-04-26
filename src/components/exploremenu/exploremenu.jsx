import React from "react";
import "./exploremenu.css";
import { menu_list } from "../../assets/assets";
import { useState } from "react";
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Whats's on your mind ?</h1>
      
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All":item.menu_name)} key={index} className="explore-menu-list-item">
              <img  className={category===item.menu_name ?"active":""}src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr></hr>
    </div>
  );
};

export default ExploreMenu;
