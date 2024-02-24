const jwt = require('jsonwebtoken');

const tokenSign = async (user) => {
  return jwt.sign(
    {
      _id: user.id,
      role: user.role
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "24h",
    }
  )
}

const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
}

const decodeToken = (token) => {

}

module.exports = { tokenSign, verifyToken, decodeToken }
