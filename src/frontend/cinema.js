import React from "react";
import FilmCover from "./filmcover";
import FilmDatas from "./filmDatas";

// import Spiderman from "./images/Spiderman.jpg";
// import Avengers from "./images/Avengers.jpg";
// import Thor from "./images/Thor.jpg";
// import Ironman from "./images/Ironman.jpg";
// import Hulk from "./images/Hulk.jpg";
// import Civilwar from "./images/Civilwar.jpg";

export default function Cinema() {
  return (
    <div>
      <div className="container">
        {FilmDatas().map(stack => {
          return (
            <FilmCover
              key={stack.title}
              id={stack.id}
              titleUrl={stack.id}
              title={stack.title}
              image={stack.image}
              rating={stack.rating}
              details={stack.detail}
            />
          );
        })}
      </div>
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