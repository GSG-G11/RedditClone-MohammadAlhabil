const {
  checkUsernameQuery,
  checkEmailQuery,
  createNewUserQuery,
} = require('./signup');

const {
  addPostQuery,
  getAllPostsQuery,
} = require('./posts');

module.exports = {
  checkUsernameQuery,
  checkEmailQuery,
  createNewUserQuery,
  addPostQuery,
  getAllPostsQuery,
};
