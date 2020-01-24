import React from "react";
import Cinema from "./cinema";
import Details from "./detailPage"
import logo from "./logo.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/'>
          <img className='logo' src={logo} alt='logo' />
        </Link>
        <br />
        <Cinema />
        <Switch>
          <Route exact path="/:cinema" component={Details}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
