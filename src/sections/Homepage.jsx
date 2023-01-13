import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GalleryItem from "../components/galleryItem";
import places from "../places";
import carouselImg from "../carouselImg";
import expData from "../expData"
import bars from "../assets/bars-solid.svg";
import coco from "../assets/coco.png";
import ExperienceItem from "../components/ExperienceItem";

function Homepage() {
  //navigate to other pages
  const navigate = useNavigate();
  function handleNavigate(e) {
    console.log(e.target);
    navigate(`/sections/${e.target.name}`);
  }

  //make navbar opaque once it reaches the booking btn
  window.onscroll = () => {
    const btn = document.querySelector("#start-booking-btn");
    const navbar = document.querySelector(".navbar");
    //get the distance from top of the window
    const btnHeight = btn.getBoundingClientRect().top;

    if (btnHeight <= 20) {
      navbar.style.backgroundColor = "black";
      navbar.style.color = "white";
    } else {
      navbar.style.backgroundColor = "rgba(37, 37, 37, 0.304)";
      navbar.style.color = "white";
    }
  };

  //create array of img-items for carousel
  const carouselImgItems = carouselImg.map((item) => (
    <div key={item} className="carousel-img">
      <img src={item} alt="photo" />
    </div>
  ));

  //create array of gallery-image-cards to display in image gallery
  const galleryImageItems = places.map((item) => {
    return <GalleryItem key={item.id} data={item} />;
  });

  //create array of experience-items
  const expItemElements = expData.map(item => (
    <ExperienceItem
      key={item.id}
      data={item}
    />
  ))

  return (
    <div className="homepage">
      <nav className="navbar">
        <div  className="logo">
          {/* <img src={coco} alt="logo" className="logo--img" /> */}
          <a href="#home">
            <h1 className="hotel-title">Satvik Tourism</h1>
          </a>
        </div>
        <ul id="list-container">
          <a href="#exp">
            <li className="listItem">Experiences</li>
          </a>
          <a href="#contact">
            <li className="listItem">Contact</li>
          </a>
        </ul>
      </nav>

      <div className="hero" id="home"></div>

      <button name="book" id="start-booking-btn" onClick={handleNavigate}>
        Book your package now
      </button>

      <div className="gallery">
        <div className="carousel-wrapper">
          <h1>Experience Kerala with us</h1>
          <div className="carousel">{carouselImgItems}</div>
        </div>
        <div className="attractions">{galleryImageItems}</div>
        <hr />
      </div>
      


      <div id="exp" className="experiences">
        <h1>Experiences of customers and families</h1>
        <div className="exp-carousel">
          {expItemElements}
        </div>
      </div>
      <div id="contact" className="contact">
        <h2>Contact section</h2>
      </div>
    </div>
  );
}

export { Homepage };
