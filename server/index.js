const express = require("express");
const PORT = process.env.PORT || 3001;
const knex = require("./knex/knex.js");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "hello" });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
