const {
  checkUsernameQuery,
  checkEmailQuery,
  createNewUserQuery,
} = require('./signup');

const {
  addPostQuery,
  getAllPostsQuery,
  deletePostQuery,
} = require('./posts');

const {
  getPostCommentsQuery,
  addCommentQuery,
  deleteCommentQuery,
} = require('./comments');

const {
  getUserInfoQuery,
} = require('./users');

module.exports = {
  checkUsernameQuery,
  checkEmailQuery,
  createNewUserQuery,
  addPostQuery,
  getAllPostsQuery,
  deletePostQuery,
  getPostCommentsQuery,
  addCommentQuery,
  deleteCommentQuery,
  getUserInfoQuery,
};
