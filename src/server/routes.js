const express = require('express');

const log = require('./lib/log');
const request = require('./lib/request');

const router = express.Router();

router.get('/', (req, res) => {
  request(`${process.env.CONTENT_ENDPOINT}/type/post`)
  .then(result => {
      res.status(200);
      res.send(result);
      log.info({ route: '/', status: 200 }, 'Responded with 200');
    })
    .catch(err => {
      res.status(500);
      res.end();
      log.error({ err: err.stack });
    });
});

router.get('/post/:uid', (req, res) => {
  request(`${process.env.CONTENT_ENDPOINT}/uid/post/${req.params.uid}`)
    .then(result => {
      res.status(200);
      res.send(result);
      log.info({ route: '/post', status: 200, params: req.params }, 'Responded with 200');
    })
    .catch(err => {
      res.status(500);
      res.end();
      log.error({ err: err.stack });
    });
});

router.get('/about', (req, res) => {
  res.status(200);
  res.send({});
  log.info({ route: '/about', status: 200 }, 'Responded with 200');
});

router.get('/search/:terms', (req, res) => {
  res.status(200);
  res.send({});
  log.info({ route: '/search', status: 200, params: req.params }, 'Responded with 200');
});

router.get('/posts/:page?', (req, res) => {
  const page = req.params.page || 1;
  request(`${process.env.CONTENT_ENDPOINT}/type/post/${page}?preview=1`)
    .then(result => {
      res.status(200);
      res.send(result);
      log.info({ route: '/posts', status: 200, params: req.params }, 'Responded with 200');
    })
    .catch(err => {
      res.status(500);
      res.end();
      log.error({ err: err.stack });
    });
});

router.get('*', (req, res) => {
  res.status(404);
  res.end();
});

module.exports = router;
