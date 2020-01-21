import React from "react";
import Cinema from "./cinema";
import Details from "./detailPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <br />
      <Router>
        <Cinema />
        <Switch>
          <Route exact path="/:cinema" component={Details}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
