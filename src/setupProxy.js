const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://127.0.0.1:${ parseInt(process.env.BLOCKLET_PORT || process.env.APP_PORT, 10) || 3001}`,
    })
  );
};