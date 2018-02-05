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
    res.status(response.statusCode);

    let data;
    try {
      data = JSON.parse(body);
    } catch (ex) {
      log.error({ err: ex });
    }

    res.send(render(req.path, data));
    log.info({ status: response.statusCode, params: req.params }, `Rendered page - responded with ${response.statusCode}`);
  });
});

app.listen(PORT, (err) => {
  if (err) throw err;

  log.info({ port: PORT }, 'Started listening for requests');
});
