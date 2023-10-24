const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter, matchPath } = require('react-router-dom');
const { renderRoutes } = require('react-router-config');

const app = express();

// Serve static assets
app.use(express.static('public'));

// Route handler for server-side rendering
app.get('*', (req, res) => {
  const context = {};
  const html = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter,
      { location: req.url, context: context },
      renderRoutes(routes)
    )
    // <StaticRouter location={req.url} context={context}>
    //   <App />
    // </StaticRouter>
  );


  // Check if any of the routes matched the request URL
  const match = routes.find((route) => matchPath(req.url, route));

  // If a route matched, set the status code to 200
  if (match) {
    res.status(200);
  }

  // Send the HTML string to the client
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React Router SSR Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});