import React from "react";
import { Link } from "react-router-dom";

export default function Film({ titleUrl, title, image, details, rating }) {
  return (
    <div>
      <Link to={`/${titleUrl}`} className="item">
        <div className="item">
          <img src={image} alt={title} />
          <div className="overlay">
            <h2>{title}</h2>
            <h4>{rating}/10</h4>
            <p>{details}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
