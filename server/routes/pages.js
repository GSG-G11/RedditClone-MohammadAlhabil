const pagesRouter = require('express').Router();

const {
  signupPage,
} = require('../controllers');

pagesRouter.get('/signup', signupPage);

module.exports = pagesRouter;
