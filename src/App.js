import React from "react";
import avengers1 from "./images/TheAvengers2012.jpg";
import Spiderman from "./images/Spiderman.jpg";
import Avengers from "./images/Avengers.jpg";
import Thor from "./images/Thor.jpg";
import Ironman from "./images/Ironman.jpg";
import Hulk from "./images/Hulk.jpg";
import Civilwar from "./images/Civilwar.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Are you not going to be refresh??</h1>
      <h2>what the heck?</h2>
      <button>Click</button>
      {/* <img src={avengers1} alt="Avengers 1" /> */}
      <br />
      <br />
      <br />
      <div className="container">
        <div className="item">
          <img src={Avengers} alt="Avengers" />
          <div>
            <h2 className="overlay">Avengers</h2>
          </div>
        </div>
        <div className="item">
          <img src={Hulk} alt="Hulk" />
          <div>
            <h2 className="overlay">Hulk</h2>
          </div>
        </div>
        <div className="item">
          <img src={Spiderman} alt="Spiderman" />
          <div>
            <h2 className="overlay">Spiderman</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="item">
          <img src={Thor} alt="Thor" />
          <div>
            <h2 className="overlay">Thor</h2>
          </div>
        </div>
        <div className="item">
          <img src={Ironman} alt="Ironman" />
          <div>
            <h2 className="overlay">Ironman</h2>
          </div>
        </div>
        <div className="item">
          <img src={Civilwar} alt="Civilwar" />
          <div>
            <h2 className="overlay">Civil War</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
