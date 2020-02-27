import React, { useEffect, useState } from "react";
import "./Details.css";

export default function Details(props) {
  useEffect(() => {
    fetchItems();
  }, []);

  const [filmDatas, setFilmDatas] = useState([]);

  const fetchItems = async () => {
    await fetch("/films/")
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
      <div id="details">
        <h1 className="filmTitle">{film.title}</h1>
        <label>{film.detail}</label>
        <p>{film.synopsis}</p>
      </div>
      <div id="divForImage">
        <img id="detailImg" src={require(`../../frontend/images/details/${film.id}.jpg`)} alt={film.id} />
      </div>
    </div>
  ) : (
    // <Redirect to="/not-found" />
    <div>Pick a movie!</div>
  );
}
