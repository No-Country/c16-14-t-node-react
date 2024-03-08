const { verifyToken } = require('../helpers/tokenHandler.js');

const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ').pop()
    const tokenData = await verifyToken(token);

    if(tokenData._id) {
      next();
    } else {
      res.status(409).json({ error: 'token no valido'})
    }
  } catch (error) {
    res.status(409).json({ error: 'token no valido'})
  }
}

module.exports = checkAuths