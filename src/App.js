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
        <Switch>
          <Route exact path="/" component={Cinema} />
          <Route exact path="/:cinema" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
