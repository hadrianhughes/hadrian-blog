const Prismic = require('prismic-javascript');

const API_ENDPOINT = process.env.API_ENDPOINT;

const getPostByUID = uid => {
  return new Promise ((resolve, reject) => {
    Prismic.getApi(API_ENDPOINT)
    .then(api => {
      api.getByUID('post', uid)
      .then(doc => {
        resolve(doc);
      }, err => {
        reject(err);
      });
    })
  });
}

module.exports = {
  getPostByUID
};
