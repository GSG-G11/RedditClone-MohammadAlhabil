const { customError } = require('../../error');
const { hashPassword, signupValidate, signToken } = require('../../../utils');
const { checkUsernameQuery, checkEmailQuery, createNewUserQuery } = require('../../../database/queries');

module.exports = ({ body }, res, next) => {
  const { username, email, password } = body;

  signupValidate.validateAsync(body)
    .then(() => checkUsernameQuery(username))
    .then(({ rowCount }) => {
      if (rowCount) throw customError('The username has already token', 400);
      return checkEmailQuery(email);
    })
    .then(({ rowCount }) => {
      if (rowCount) throw customError('The email has already token', 400);
      return hashPassword(password);
    })
    .then((hashedPassword) => createNewUserQuery({ username, email, password: hashedPassword }))
    .then(({ rows }) => signToken(rows[0]))
    .then((token) => res.status(201).cookie('access_token', token).json({ message: 'User added successfully', status: 201 }))
    .catch((err) => err.details ? next(customError(err.details[0].message, 400)) : next(err));
};
