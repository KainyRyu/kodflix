import React from "react";
import Film from "./film";
import FilmDetails from "./filmDetails"
// import CaptainDetail from "./images/captainDetail.jpg"
// import CaptainMarvelDetail from "./images/captainMarvelDetail.jpg"
// import IronmanDetail from "./images/ironman2008Detail.jpg"
// import HulkDetail from "./images/HulkDetail.jpg"
// import Ironman2Detail from "./images/ironman2010Detail.jpg"
// import Thor1 from "./images/thor2011.jpg"
// import AvengersDetail from "./images/avengers2012Detail.jpg"
// import Ironman3Detail from "./images/ironman3Detail.jpg"
// import Thor2Detail from "./images/thor2013Detail.jpg"
// import Wintersoldier from "./images/wintersoldier2014.jpg"
// import WintersoldierDetail from "./images/wintersoldier2014Detail.jpg"

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
        {
          FilmDetails().map(stack => {
            console.log('image', stack.image)
            return(
          <Film key={stack.title} titleUrl={stack.titleUrl} title={stack.title} image={stack.image} rating={stack.rating} details={stack.detail} />
          )})
        }
      </div>
    </div>
  )}





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
