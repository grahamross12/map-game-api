const express = require('express');
const fs = require('fs');

const app = express();
const DAILY_NUMBERS_FILE = "/home/ec2-user/shared/daily_numbers.json";
app.get('/api/daily-numbers', (req, res) => {
  fs.readFile(DAILY_NUMBERS_FILE, (err, data) => {
    let countries;
    if (err) {
      countries = [];
      throw err;
    };
    countries = JSON.parse(data);
  });
  res.send(countries);
});

app.listen(3000, () => console.log('API is listening on port 3000.'));

