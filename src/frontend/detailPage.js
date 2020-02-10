import React, { useEffect, useState } from "react";
// import FilmDatas from "./filmDatas";
import "./film.css";

export default function FilmDetails(props) {
  useEffect(() => {
    fetchItems();
  }, []);

  const [filmDatas, setFilmDatas] = useState([]);

  const fetchItems = async () => {
    await fetch("/rest/films/")
      .then(res => {
        if (!res.status) throw new Error("Something went wrong!");
        return res.json();
      })
      .then(res => setFilmDatas(res))
      .catch(err => console.log(err));
  };
  const film = filmDatas.find(filmData => filmData.id === props.match.params.cinema);
  console.log(film)
  return film ? (
    <div id="detailBg">
        <>
          <div id="details">
            <h1 className="filmTitle">{film.title}</h1>
            <label>{film.detail}</label>
            <p>{film.synopsis}</p>
          </div>
          <div id="divForImage">
            {/* <img id="detailImg" src={film.detailImg} alt={film.id} /> */}

            <div className="detailOverlay"></div>
          </div>
        </>
    </div>
  ) : (
    // <Redirect to="/not-found" />
    <div>Pick a movie!</div>
  );
}
