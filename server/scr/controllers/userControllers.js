const { User } = require('../db.js');
const { encrypt, compare } = require('../helpers/bcryptHandler.js');

const createUser = async ( email, username, password, nationality) => {
  const hashPassword = await encrypt(password)
  const user = await User.create({ email, username, password: hashPassword, nationality });
  return user;
}

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } })
  const validPass = user ? await compare(password, user.password) : false;
  return user && validPass;
}

module.exports = { createUser, loginUser }