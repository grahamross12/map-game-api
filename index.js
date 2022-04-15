const express = require('express');
const fs = require('fs');
const app = express();
const DAILY_NUMBERS_FILE = "./daily_numbers.txt";
app.get('/api/daily-numbers', (req, res) => {
  let countries = fs.readFileSync(DAILY_NUMBERS_FILE).toString().split("\n");
  res.send(countries.slice(0, 10));
});

app.listen(3000, () => console.log('API is listening on port 3000.'));

