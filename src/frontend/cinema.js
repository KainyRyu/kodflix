import React from "react";
import FilmCover from "./filmcover";
import FilmDatas from "./filmDatas";

export default function Cinema() {
  return (
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
