require('dotenv').config();
require('babel-register');
const express = require('express');
const app = express();
const path = require('path');

const render = require('./lib/render');
const { getPostByUID } = require('./lib/content');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../build')));

app.get('/post/:uid', (req, res) => {
  getPostByUID(req.params.uid).then(data => {
    res.send(render(req.url, data));
  });
});

app.listen(PORT, (err) => {
  if (err) throw err;

  console.info(`Listening on port ${PORT}...`);
});
