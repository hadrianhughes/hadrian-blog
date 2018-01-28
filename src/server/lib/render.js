const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');

const App = require('../../App').default;
const Layout = require('../../components/Layout').default;
const Routes = require('../../Routes').default;

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
  <html>
    <head>
      <link rel="stylesheet" type="text/css" href="/style.css" />
    </head>
    <body>
      <div id="root">${body}</div>
      <script src="/bundle.js"></script>
    </body>
  </html>
  `
};
