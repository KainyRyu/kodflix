import React, { Component, useEffect, useState } from "react";
import "./Film.css";

function FilmDetails() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [filmDatas, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch("/rest/films/");
        const filmDatas = await data.json();
        setItems(filmDatas);
        console.log(filmDatas.id);
    };

    return (
        <div id="detailBg">
          <div id="details">
            <h1 className="filmTitle">{filmDatas.title}</h1>
            <label>{filmDatas.detail}</label>
            <p>{filmDatas.synopsis}</p>
          </div>
          <div id="divForImage">
            <img
              id="detailImg"
              src={filmDatas.detailImg}
              alt={filmDatas.id}
            />
            
            <div className="detailOverlay"></div>
          </div>
        </div>
    )
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
