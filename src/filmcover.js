import React from "react";
import { Link } from "react-router-dom";

export default function FilmCover({ id, title, image, rating }) {
  return (
    <div className='coverCover'>
      <Link to={`/${id}`} className="item">
        <div className="item">
          <img src={image} alt={id} />
          <div className="overlay">
            <p>
              <label>{title}</label>{title} <br />
              {rating}/10
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
