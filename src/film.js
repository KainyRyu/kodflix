import React from "react";
import { Link } from "react-router-dom";

export default function Film(film) {
  return (
    <div className="itemMargin">
      <Link to={`/${film.title}`} className="item">
        <div className="item">
          <img src={film.image} alt="{film.title}" />
          <h2 className="overlay">{film.title}</h2>
        </div>
      </Link>
    </div>
  );
}
