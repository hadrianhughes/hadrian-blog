const express = require('express');

const log = require('./lib/log');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200);
  res.send(require('../../__mock-data__/post-list.json'));
  log.info({ route: '/', status: 200 }, 'Responded with 200');
});

router.get('/post/:uid', (req, res) => {
  res.status(200);
  res.send(require('../../__mock-data__/post.json'));
  log.info({ route: '/post', status: 200, params: req.params }, 'Responded with 200');
});

router.get('/about', (req, res) => {
  res.status(200);
  res.send(require('../../__mock-data__/about.json'));
  log.info({ route: '/about', status: 200 }, 'Responded with 200');
});

router.get('/search/:terms', (req, res) => {
  res.status(200);
  res.send(require('../../__mock-data__/post-list.json'));
  log.info({ route: '/search', status: 200, params: req.params }, 'Responded with 200');
});

router.get('*', (req, res) => {
  res.status(404);
  res.end();
});

module.exports = router;
