import React from "react";
import Spiderman from "./images/Spiderman.jpg";
import Avengers from "./images/Avengers.jpg";
import Thor from "./images/Thor.jpg";
import Ironman from "./images/Ironman.jpg";
import Hulk from "./images/Hulk.jpg";
import Civilwar from "./images/Civilwar.jpg";
import Movie from "./movie"
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Are you not going to be refresh??</h1>
      <button>Click</button>
      <br />
      <br />
      <br />
      <div className="container">
        <Movie title="Avengers" image={Avengers} />
        <Movie title="Spiderman" image={Spiderman} />
        <Movie title="Hulk" image={Hulk} />
        <Movie title="Thor" image={Thor} />
        <Movie title="Ironman" image={Ironman} />
        <Movie title="Civilwar" image={Civilwar} />
      </div>
    </div>
  );
}

export default App;
