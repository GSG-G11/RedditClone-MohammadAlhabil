const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string().$.min(3).rule({ message: 'Title should contains at least 5 character' }).required(),
  content: Joi.string().$.max(250).rule({ message: 'Content can\t be more than 250 characters' }).required(),
});
