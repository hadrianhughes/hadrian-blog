const request = require('request');

module.exports = url => (
  new Promise ((resolve, reject) => {
    request(url, (err, response, body) => {
      if (err) reject(err);

      resolve(body);
    });
  })
);
