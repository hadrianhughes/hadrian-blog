const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');

const App = require('../../App').default;
const Layout = require('../../components/Layout').default;

module.exports = (location, data) => {
  const body = (
    renderToString(
      <StaticRouter
        location={location}
        context={{}}
      >
        <App data={data} />
      </StaticRouter>
    )
  );

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
