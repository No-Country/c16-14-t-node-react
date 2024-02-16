const { User } = require('../db.js');

const createUser = async (forename, surname, email, nick, password) => {
  const user = await User.create({ forename, surname, email, nick, password });
  return user;
}

module.exports = { createUser }