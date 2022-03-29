const {
  signup,
  login,
  logout,
} = require('./auth');

const {
  addPost,
  allPosts,
} = require('./posts');

const {
  getPostComments,
  addComment,
  deleteComment,
} = require('./comments');

module.exports = {
  signup,
  login,
  logout,
  addPost,
  allPosts,
  getPostComments,
  addComment,
  deleteComment,
};
