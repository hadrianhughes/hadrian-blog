require('dotenv').config();
require('babel-register');
const express = require('express');
const app = express();
const path = require('path');

const render = require('./lib/render');
const log = require('./lib/log');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.status(200);
  res.send(render('/', require('../../__mock-data__/post-list.json')));
  log.info({ route: '/', status: 200 }, 'Responded with 200');
});

app.get('/post/:uid', (req, res) => {
  res.status(200);
  res.send(render(req.url, require('../../__mock-data__/post.json')));
  log.info({ route: 'post', status: 200, params: req.params }, 'Responded with 200');
});

app.get('/about', (req, res) => {
  res.status(200);
  res.send(render('/about', require('../../__mock-data__/about.json')));
  log.info({ route: 'about', status: 200 }, 'Responded with 200');
});

app.get('/search/:terms', (req, res) => {
  res.status(200);
  res.send(render(req.url, require('../../__mock-data__/post-list.json')));
  log.info({ route: 'search', status: 200, req.params }, 'Responded with 200');
});

app.listen(PORT, (err) => {
  if (err) throw err;

  log.info({ port: PORT }, 'Started listening for requests');
});
