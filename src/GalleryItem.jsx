import React from "react";

export default function GalleryItem(props) {
  const { img, desc, orientLeft } = props.data;
  const customStyle = {
    flexFlow: orientLeft ? `row wrap` : `row-reverse wrap`,
  };
  return (
    <div style={customStyle} className="galleryItem">
      <div className="img-box">
        <img src={img} alt="attraction-photo" />
      </div>
      <p>{desc}</p>
    </div>
  );
}
