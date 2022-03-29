const {
  signup,
  login,
  logout,
} = require('./auth');

const {
  addPost,
  allPosts,
} = require('./posts');

module.exports = {
  signup,
  login,
  logout,
  addPost,
  allPosts,
};
