import React, { Component, useEffect, useState } from "react";
import FilmDatas from "./filmDatas";
import { Redirect } from "react-router-dom";
import "./film.css";

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