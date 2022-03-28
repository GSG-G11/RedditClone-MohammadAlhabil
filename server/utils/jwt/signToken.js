const { sign } = require('jsonwebtoken');

module.exports = ({ id, username }) => new Promise((resolve, reject) => {
  sign({ id, username }, process.env.JWT_SECRET, (err, token) => {
    if (err) return reject(err);
    return resolve(token);
  });
});
