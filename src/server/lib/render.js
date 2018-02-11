const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');

const log = require('./log');

const App = require('../../App').default;
const Layout = require('../../components/Layout').default;

module.exports = (location, data) => {
  let body;
  try {
    body = (
      renderToString(
        <StaticRouter
          location={location}
          context={{}}
        >
          <App
            data={data}
          />
        </StaticRouter>
      )
    );
  } catch (err) {
    log.error({ err: err.stack });
  }

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <link rel="stylesheet" type="text/css" href="/style.css" />
      <meta name="viewport" content="initial-scale=1.0" />
    </head>
    <body>
      <div id="root">${body}</div>
      <script>window.__INITIAL__ = ${JSON.stringify(data)}</script>
      <script type="text/javascript" src="/bundle.js"></script>
    </body>
  </html>
  `
};
