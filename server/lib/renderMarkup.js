const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');

const App = require('../../src/App').default;

module.exports = (location) => (
  renderToString(
    <StaticRouter
      location={location}
      context={{}}
    >
      <App />
    </StaticRouter>
  )
);
