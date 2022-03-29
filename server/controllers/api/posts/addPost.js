const { addPostQuery } = require('../../../database/queries');
const { postValidate } = require('../../../utils');
const { customError } = require('../../error');

module.exports = (req, res, next) => {
  const { body: { title, content }, id: userId } = req;

  postValidate.validateAsync(req.body)
    .then(() => addPostQuery({ userId, title, content }))
    .then(({ rows }) => res.status(201).json({ status: 201, message: 'Post Added', post: rows[0] }))
    .catch((err) => err.details ? next(customError(err.details[0].message, 400)) : next(err));
};
