import React from "react";
import { Link, Switch } from "react-router-dom";

export default function Movie(movie) {
  return (
    <Switch>
      <Link to="/{movie.title}" className="item">
        <div className="itemMargin">
          <div className="item">
            <img src={movie.image} alt="{movie.title}" />
            <h2 className="overlay">{movie.title}</h2>
          </div>
        </div>
      </Link>
    </Switch>
  );
}
