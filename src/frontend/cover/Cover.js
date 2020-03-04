import React from "react";
import './Cover.css'
import { Link } from "react-router-dom";


export default function FilmCover({ id, title, image, rating }) {
  return (
    <div className='cover-box'>
      <Link to={`/${id}`} className="item">
        <div className="item">
          <img src={image} alt={id} />
          <div className="overlay">
            <div>
              <label>{title}</label> <br />
              {rating}/10
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
