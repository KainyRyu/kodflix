import React from "react";
import { Link } from "react-router-dom";

export default function Film({ id, title, image, details, rating }) {
  return (
    <div>
      <Link to={`/${id}`} className="item">
        <div className="item">
          <img src={image} alt={id} />
          <div className="overlay">
            <h2>{title}</h2>
            <h4>{rating}/10</h4>
            <p>{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
