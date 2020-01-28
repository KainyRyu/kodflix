const express = require("express");
const shows = require("./list");
const app = express();
const port = 3001;
// const Data = require("./list");

app.get("/", (req, res) => res.send("Hello world"));
app.get("/rest/shows", (req, res) => res.send(shows));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));