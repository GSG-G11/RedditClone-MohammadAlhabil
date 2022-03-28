const apiRouter = require('express').Router();

const {
  signup,
  // login,
  // logout,
} = require('../controllers');

apiRouter.post('/signup', signup);

module.exports = apiRouter;
