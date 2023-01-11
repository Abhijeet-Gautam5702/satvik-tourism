import React from "react";
import { useNavigate } from "react-router-dom";
import { makeNavSticky } from "../logic"; 

function Homepage() {

  const navigate=useNavigate();
  function handleNavigate(e){
    console.log(e.target)
    navigate(`/sections/${e.target.name}`)
  }

  return (
    <div className="homepage" onScroll={makeNavSticky}>
      <nav className="navbar">
        <h2>navbar</h2>
      </nav>
      <div className="hero">

      </div>
      <button name="book" id="start-booking-btn" onClick={handleNavigate}>Book your package now</button>
      <div className="gallery">
        <h2>Image gallery</h2>
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
