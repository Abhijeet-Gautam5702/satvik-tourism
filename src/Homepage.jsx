import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GalleryItem from "./GalleryItem";
import places from "./places";
import carouselImg from "./carouselImg";
import expData from "./expData";
import up from "./assets/up.png";
import ExperienceItem from "./ExperienceItem";

function Homepage() {
  //navigate to other pages
  const navigate = useNavigate();
  function handleNavigate(e) {
    navigate(`/${e.target.name}`);
  }

  //make navbar and scrollToTopIcon opaque once it reaches the booking btn
  window.onscroll = () => {
    const scrollToTopIcon = document.querySelector(".scrollToTop");
    const btn = document.querySelector("#start-booking-btn");
    const navbar = document.querySelector(".navbar");
    //get the distance of from top of the window
    const btnHeight = btn.getBoundingClientRect().top;

    if (btnHeight <= 20) {
      navbar.style.backgroundColor = "black";
      navbar.style.color = "white";
      scrollToTopIcon.style.display = "block";
    } else {
      navbar.style.backgroundColor = "rgba(0,0,0,0.4)";
      // navbar.style.backgroundColor = "transparent";
      navbar.style.color = "white";
      scrollToTopIcon.style.display = "none";
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
  const expItemElements = expData.map((item) => (
    <ExperienceItem key={item.id} data={item} />
  ));

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">
          <a href="#home">
            <h1 className="hotel-title">
              {" "}
              <span>Satvik</span> Tourism
            </h1>
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

      <div className="hero" id="home">
        <p>
          God's own country
        </p>
        {/* <h1>Kerela</h1>
        <p>God's own country</p> */}
      </div>

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
        <h1>Experiences of our customers</h1>
        <div className="exp-carousel">{expItemElements}</div>
      </div>

      <div id="contact" className="contact">
        <h2>Contact section</h2>
        <h3>Thank you for reaching out to us.</h3>
        <p>
          For inquiries, please feel free to call us at +91 9876 1234 locally or
          at +91 9987 4034 from outside the country. You may also reach us via
          WhatsApp on +91 9876 1234.
        </p>
      </div>

      <footer>
        developed with ?????? by{" "}
        <a href="https://github.com/Abhijeet-Gautam5702">Abhijeet Gautam</a>
      </footer>

      <div className="scrollToTop">
        <a href="#home">
          <img src={up} alt="scroll-to-top" />
        </a>
      </div>
    </div>
  );
}

export { Homepage };
