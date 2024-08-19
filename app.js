const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("app......");
});

module.exports = app;
