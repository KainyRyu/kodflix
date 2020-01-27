import React from "react";
import { Link } from "react-router-dom";

export default function FilmCover({ id, title, image, rating }) {
  return (
    <div>
      <Link to={`/${id}`} className="item">
        <div className="item">
          <img src={image} alt={id} />
          <div className="overlay">
            {/* <h2>{title}</h2>
            <h4>{rating}/10</h4> */}
          </div>
        </div>
      </Link>
    </div>
  );
}
