const connection = require('../../config/connection');

module.exports = () => connection.query(
  `SELECT p.id, p.title, p.content, u.username AS username
    FROM posts AS p
    JOIN users AS u
    ON u.id = p.user_id`);
