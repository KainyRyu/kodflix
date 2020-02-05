const express = require("express");
const getFilms = require("./list");
const app = express();
const port = 3001;

app.get("/", (req, res) => res.send("Hello Kodiri!"));

app.get("/rest/films/:id?", (req, res) => {
    res.send(getFilms(req.params.id));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
