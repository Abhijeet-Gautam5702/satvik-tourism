import React from "react";

export default function ExperienceItem(props) {
  const { title, exp, img, rating } = props.data;
  return (
    <div className="exp-item">
      <div className="user-img-box">
        <img src={img} alt="user-img" />
      </div>
      <p className="title">{title}</p>
      <p className="rating">{rating}</p>
      <p className="desc">{exp}</p>
    </div>
  );
}
