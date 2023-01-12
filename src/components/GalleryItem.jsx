import React from "react";
/*
Item will receive a prop = {img, description, orientLeft}

orientLeft = true [img on left]
           = false [img on right]

use dynamic styling 

in homepage.jsx ::> import data from .js file and create an array of gallery items and then render them.
*/
export default function GalleryItem(props) {
  const { img, desc } = props.data;
  return (
    <div className="galleryItem">
      <div className="img-box">
        <img src={img} alt="" />
      </div>
      <p>{desc}</p>
    </div>
  );
}
