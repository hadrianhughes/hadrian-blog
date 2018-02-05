require('dotenv').config();
const express = require('express');
const path = require('path');
const request = require('request');

const log = require('./lib/log');
const render = require('./lib/render');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.use('/api', routes);

app.get('*', (req, res) => {
  request(`http://localhost:${PORT}/api${req.path}`, (err, response, body) => {
    if (response.statusCode === 200) {
      res.status(200);
      res.send(render(req.path, JSON.parse(body)));
      log.info({ status: 200, params: req.params }, 'Rendered page - responded with 200');
    } else {
      res.status(404);
      res.end();
      log.info({ status: 404 }, 'Failed to render - responded with 404');
    }
  });
});

app.listen(PORT, (err) => {
  if (err) throw err;

  log.info({ port: PORT }, 'Started listening for requests');
});
