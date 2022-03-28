const { clientError, serverError } = require('./error');
const {
  signup,
  login,
  logout,
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
};
