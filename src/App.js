import React from "react";
import Cinema from "./cinema";
import Film from "./film";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <br />
      <br />
      <br />
      <Router>
        <Switch>
          <Route exact path="/" component={Cinema}></Route>
          <Route exact path="/:cinema" component={Film}></Route>
          <Film />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
