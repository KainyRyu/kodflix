import React from "react";
import { Link } from "react-router-dom";

export default function Movie(movie) {
  return (
    <Link to="/{movie.title}" className="item">
      <div className="itemMargin">
        <div className="item">
          <img src={movie.image} alt="{movie.title}" />
          <h2 className="overlay">{movie.title}</h2>
        </div>
      </div>
    </Link>
  );
};
