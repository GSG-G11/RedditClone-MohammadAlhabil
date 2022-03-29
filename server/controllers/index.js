const { clientError, serverError } = require('./error');
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
} = require('./api');

const {
  signupPage,
  loginPage,
} = require('./pages');

module.exports = {
  clientError,
  serverError,
  signup,
  login,
  logout,
  signupPage,
  loginPage,
  addPost,
  allPosts,
  deletePost,
  getPostComments,
  addComment,
  deleteComment,
};
