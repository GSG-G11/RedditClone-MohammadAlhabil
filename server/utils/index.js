const {
  hashPassword,
  comparePasswords,
} = require('./bcryptjs');

const {
  signToken,
  verifyToken,
} = require('./jwt');

const {
  loginValidate,
  signupValidate,
  postValidate,
  commentValidate,
} = require('./validation');

module.exports = {
  hashPassword,
  comparePasswords,
  signToken,
  verifyToken,
  loginValidate,
  signupValidate,
  postValidate,
  commentValidate,
};
