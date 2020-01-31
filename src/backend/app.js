const express = require("express");
const getFilms = require("./list");
const app = express();
const port = 3001;

app.get("/", (req, res) => res.send("Hello Kodiri!"));

app.get("/rest/film/:id", (req, res) => {
    let films = getFilms;
    let film = films.find(film => film.id === req.params.id);
    res.send(film.synopsis);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
