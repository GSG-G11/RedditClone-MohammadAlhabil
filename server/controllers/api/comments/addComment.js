const { addCommentQuery } = require('../../../database/queries');
const { commentValidate } = require('../../../utils');
const { customError } = require('../../error');

module.exports = (req, res, next) => {
  const { body: { content, postId }, id: userId } = req;

  commentValidate.validateAsync({ content })
    .then(() => addCommentQuery({ postId, userId, content }))
    .then(({ rows }) => res.status(201).json({ message: 'Comment added successfully', status: 201, comment: rows[0] }))
    .catch((err) => err.details ? next(customError(err.message, 400)) : next(err));
};
