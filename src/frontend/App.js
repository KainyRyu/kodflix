import React from "react";
import Cinema from "./Cinema";
import Details from "./details/Details";
import logo from "./logo.png";
import NotFound from "./notFound";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <br />
        <Cinema />
        <Switch>
          {/* <Route exact path='/' component={Cinema}></Route> */}
          <Route exact path="/not-found" component={NotFound}></Route>
          <Route exact path="/:cinema" component={Details}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
