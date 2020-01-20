import React from "react";
import Film from "./film";
import Captain from "./images/captain2011.jpg"
import CaptainMarvel from "./images/captainMarvel2019.jpg"
import Ironman1 from "./images/ironman2008.jpg"
import Hulk from "./images/incrediblehulk2008.jpg"
import Ironman2 from "./images/ironman2010.jpg"
import Thor1 from "./images/thor2011.jpg"
import Avengers from "./images/avengers2012.jpg"
import Ironman3 from "./images/ironman3.jpg"
import Thor2 from "./images/thor2013.jpg"
import Wintersoldier from "./images/wintersoldier2014.jpg"
// import Spiderman from "./images/Spiderman.jpg";
// import Avengers from "./images/Avengers.jpg";
// import Thor from "./images/Thor.jpg";
// import Ironman from "./images/Ironman.jpg";
// import Hulk from "./images/Hulk.jpg";
// import Civilwar from "./images/Civilwar.jpg";

export default function Cinema() {
  return (
    <div className="container">
      <Film titleUrl='captain' title="Captain America: The First Avenger" image={Captain} rating={6.9} details='12A | 2h 4min | Action, Adventure, Sci-Fi | 29 July 2011 (UK)' />
      <Film titleUrl='captainmarvel' title="Captain Marvel" image={CaptainMarvel} rating={6.9} details='' />
      <Film titleUrl='ironman1' title="Iron man" image={Ironman1} rating={7.9} details='' />
      <Film titleUrl='hulk' title="The Incredible Hulk" image={Hulk} rating={6.7} details='' />
      <Film titleUrl='ironman2' title="Iron man 2" image={Ironman2} rating={7.0} details='' />
      <Film titleUrl='thor' title="Thor" image={Thor1} rating={7.0} details='' />
      <Film titleUrl='avengers' title="Avengers Assemble" image={Avengers} rating={8.0} details='' />
      <Film titleUrl='ironman3' title="Iron man 3" image={Ironman3} rating={7.2} details='' />
      <Film titleUrl='thor2' title="Thor: The Dark World" image={Thor2} rating={6.9} details='' />
      <Film titleUrl='winstersoldier' title="Captain America: The Winter Soldier" image={Wintersoldier} rating={7.7} details='' />
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
