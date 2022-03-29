const apiRouter = require('express').Router();

const {
  signup,
  login,
  logout,
  addPost,
  allPosts,
  deletePost,
  getPostComments,
  addComment,
  deleteComment,
} = require('../controllers');

const { checkLoggedIn } = require('../middleware');

apiRouter.post('/signup', signup);
apiRouter.post('/login', login);
apiRouter.get('/posts', allPosts);
apiRouter.get('/comments/:postId', getPostComments);

apiRouter.use(checkLoggedIn);
apiRouter.get('/logout', logout);
apiRouter.post('/post', addPost);
apiRouter.delete('/post/:postId', deletePost);
apiRouter.post('/comment', addComment);
apiRouter.delete('/comment/:commentId', deleteComment);

module.exports = apiRouter;
