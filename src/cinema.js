import React from "react";
import Film from "./film";
import Spiderman from "./images/Spiderman.jpg";
import Avengers from "./images/Avengers.jpg";
import Thor from "./images/Thor.jpg";
import Ironman from "./images/Ironman.jpg";
import Hulk from "./images/Hulk.jpg";
import Civilwar from "./images/Civilwar.jpg";

export default function Cinema() {
  return (
    <div className="container">
      <Film title="Avengers" image={Avengers} />
      <Film title="Spiderman" image={Spiderman} />
      <Film title="Hulk" image={Hulk} />
      <Film title="Thor" image={Thor} />
      <Film title="Ironman" image={Ironman} />
      <Film title="Civilwar" image={Civilwar} />
    </div>
  );
}
// ===================================================
// <Router>
//   <Switch>
//     <Route exact path="/">
//       <Home />
//     </Route>
//     <Route path="/about">
//       <About />
//     </Route>
//   </Switch>
// </Router>;

// function Page() {
//   return(
//     <h1> WHATEVER</h1>
//   )

// }

// <Route path="/page">
//   <Page />
// </Route>
