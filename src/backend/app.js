const express = require("express");
const app = express();
const port = 3001;
const DataB = require("./list");

// app.get("/", (req, res) => res.send("Hello World!"));
app.get("/", (req, res) => res.send(DataB.Data));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
