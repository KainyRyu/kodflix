import React from "react";
import Movie from "./movie"
import Spiderman from "./images/Spiderman.jpg";
import Avengers from "./images/Avengers.jpg";
import Thor from "./images/Thor.jpg";
import Ironman from "./images/Ironman.jpg";
import Hulk from "./images/Hulk.jpg";
import Civilwar from "./images/Civilwar.jpg";


export default function Cinema() {
    return (
      <div>
      <div className="container">
          <Movie title="Avengers" image={Avengers} />
          <Movie title="Spiderman" image={Spiderman} />
          <Movie title="Hulk" image={Hulk} />
          <Movie title="Thor" image={Thor} />
          <Movie title="Ironman" image={Ironman} />
          <Movie title="Civilwar" image={Civilwar} />
        </div>
      </div>
    )
  }