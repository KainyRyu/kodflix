import React from "react";
import Cinema from "./cinema";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <br />
        <br />
        <br />
        <Route exact path="/" component={Movie}></Route>
        <Route exact path="/films" component={Films}></Route>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div><h1>This Is The HOME Page</h1></div>
  )
}

function Films() {
  return (
    <div><h1>HELLOOOOOOOOOOOO</h1></div>
  )
}

export default App;
