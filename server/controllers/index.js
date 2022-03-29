const { clientError, serverError } = require('./error');
const {
  signup,
  login,
  logout,
  addPost,
  allPosts,
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
  getPostComments,
  addComment,
  deleteComment,
};
