const { User } = require('../db.js');
const { encrypt, compare } = require('../helpers/bcryptHandler.js');
const { tokenSign } = require('../helpers/tokenHandler.js')

const createUser = async ( email, username, password, nationality) => {
  const hashPassword = await encrypt(password)
  const user = await User.create({ email, username, password: hashPassword, nationality });
  return user;
}

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } })
  // const validPass = user ? await compare(password, user.password) : false;
  const validPass = user ? [await compare(password, user.password), await tokenSign(user)] : false;
  return [user && validPass[0], user, validPass[1]];
}

module.exports = { createUser, loginUser }