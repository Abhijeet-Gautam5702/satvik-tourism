import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GalleryItem from "../components/galleryItem";
import places from "../places"
import bars from "../assets/bars-solid.svg";
import coco from "../assets/coco.png";

function Homepage() {

  //navigate to other pages
  const navigate = useNavigate();
  function handleNavigate(e) {
    console.log(e.target);
    navigate(`/sections/${e.target.name}`);
  }

  //make navbar opaque once it reaches the booking btn
  window.onscroll = () => {
    const btn=document.querySelector("#start-booking-btn");
    const navbar=document.querySelector(".navbar");
    //get the distance from top of the window
    const btnHeight=btn.getBoundingClientRect().top;

    if(btnHeight<=20){
      navbar.style.backgroundColor = "white";
      navbar.style.color = "black";
      
    }
    else{
      navbar.style.backgroundColor = "rgba(37, 37, 37, 0.304)";
      navbar.style.color = "white";
    }
  }

  const imageItems = places.map((item) => {
    return (
      <GalleryItem
        key = {item.id}
        data = {item}
      />
    )
  })

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">
          {/* <img src={coco} alt="logo" className="logo--img" /> */}
          <h1 className="hotel-title">Satvik Tourism</h1>
        </div>
        <ul id="list-container">
          <li className="listItem">Experiences</li>
          <li className="listItem">Contact</li>
        </ul>
      </nav>

      <div className="hero"></div>

      <button name="book" id="start-booking-btn" onClick={handleNavigate}>
        Book your package now
      </button>

      <div className="gallery">
        {imageItems}
      </div>
      <div className="experiences">
        <h2>Experiences of customers and families</h2>
      </div>
      <div className="contact">
        <h2>Contact section</h2>
      </div>
    </div>
  );
}

export { Homepage };
