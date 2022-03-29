const { getPostCommentsQuery } = require('../../../database/queries');

module.exports = (req, res, next) => {
  const { postId } = req.params;
  getPostCommentsQuery(postId).then(({ rows }) => {
    res.json({ message: 'success', status: 200, comments: rows });
  }).catch((err) => next(err));
};
