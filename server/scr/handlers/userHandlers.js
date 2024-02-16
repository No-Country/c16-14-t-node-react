const { createUser } = require('../controllers/userControllers.js');

const signUpHandler = async (req, res) => {
  const { forename, surname, email, nick, password } = req.body;
  
  try {
    const user = await createUser(forename, surname, email, nick, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

}

module.exports = { signUpHandler }