const {
  signup,
  login,
  logout,
} = require('./auth');

const {
  addPost,
  allPosts,
  deletePost,
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
  deletePost,
  getPostComments,
  addComment,
  deleteComment,
};
