require('dotenv').config();
require('babel-register');
const express = require('express');
const app = express();
const path = require('path');

const render = require('./lib/render');
const log = require('./lib/log');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../build')));

app.get('/post/:uid', (req, res) => {
  res.status(200);
  res.end();
  log.info({ route: 'post', status: '200', params: req.params }, 'Responded with 200');
});

app.listen(PORT, (err) => {
  if (err) throw err;

  log.info({ port: PORT }, 'Started listening for requests');
});
