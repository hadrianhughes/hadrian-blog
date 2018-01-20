require('dotenv').config();
require('babel-register');
const express = require('express');
const app = express();
const path = require('path');

const renderMarkup = require('./lib/renderMarkup');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.send(renderMarkup(req.url));
});

app.listen(PORT, (err) => {
  if (err) throw err;

  console.info(`Listening on port ${PORT}...`);
});
