const express = require("express");
const getFilms = require("./filmDatas");
const app = express();
const port = 3001;

app.get("/", (req, res) => res.send("Hello Kodiri!"));

app.get("/films/", (req, res) => {
  res.send(getFilms());
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
