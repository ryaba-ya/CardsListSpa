const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // Проксируем запросы к API на сервере Heroku
  app.use(
    '/api', // Ваш путь к API
    createProxyMiddleware({
      target: 'https://anime-facts-rest-api.herokuapp.com',
      changeOrigin: true,
    })
  );
};
