const express = require("express");
const fs = require("fs");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors())

app.get("/api/daily-numbers", (req, res) => {
  let countries = fs.readFileSync(process.env.DAILY_NUMBERS_FILEPATH).toString().split("\n");
  res.send(countries.slice(0, 10));
});

app.listen(3000, () => console.log("API is listening on port 3000."));
