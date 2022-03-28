const apiRouter = require('express').Router();

const {
  signup,
  login,
  // logout,
} = require('../controllers');

apiRouter.post('/signup', signup);
apiRouter.post('/login', login);

module.exports = apiRouter;
