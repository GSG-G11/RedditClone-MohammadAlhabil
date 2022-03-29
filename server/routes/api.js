const apiRouter = require('express').Router();

const {
  signup,
  login,
  logout,
  addPost,
  allPosts,
} = require('../controllers');

const { checkLoggedIn } = require('../middleware');

apiRouter.post('/signup', signup);
apiRouter.post('/login', login);
apiRouter.get('/posts', allPosts);

apiRouter.use(checkLoggedIn);
apiRouter.get('/logout', logout);
apiRouter.post('/post', addPost);

module.exports = apiRouter;
