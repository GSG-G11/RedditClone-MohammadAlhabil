const {
  checkUsernameQuery,
  checkEmailQuery,
  createNewUserQuery,
} = require('./signup');

const {
  addPostQuery,
  getAllPostsQuery,
} = require('./posts');

const {
  getPostCommentsQuery,
  addCommentQuery,
  deleteCommentQuery,
} = require('./comments');

module.exports = {
  checkUsernameQuery,
  checkEmailQuery,
  createNewUserQuery,
  addPostQuery,
  getAllPostsQuery,
  getPostCommentsQuery,
  addCommentQuery,
  deleteCommentQuery,
};
