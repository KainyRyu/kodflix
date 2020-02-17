const express = require("express");
const path = require('path');
const getFilms = require("./filmDatas");
const app = express();
const port = process.env.PORT || 3001;

// app.get("/", (req, res) => res.send("Hello Kodiri!"));
app.get("/films/", (req, res) => { res.send(getFilms()); });
app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
