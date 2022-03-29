const { getAllPostsQuery } = require('../../../database/queries');

module.exports = (req, res, next) => getAllPostsQuery().then(({ rows }) => {
  res.json({ message: 'Successfully retrieved all posts', status: 200, posts: rows });
}).catch((err) => next(err));
