import React from "react";
import { Link } from "react-router-dom";

export default function Film({ titleUrl, title, image, details, rating }) {
  return (
    <div>
      <div className="item">
        <Link to={`/${titleUrl}`}>
          <img src={image} alt={title} />
        </Link>
        <div className="overlay">
          <h2>{title}</h2>
          <h4>{rating}/10</h4>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
}
