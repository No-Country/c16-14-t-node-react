const { createUser, loginUser } = require('../controllers/userControllers.js');

const signUpHandler = async (req, res) => {
  const { email, username, nationality, password } = req.body;
  
  try {
    const user = await createUser(email, username, nationality, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

}

const signInHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const login = await loginUser(email, password);
    
    if(login[0]) {
      const user = login[1]
      const token = login[2]
      res.status(200).json({user: user, token: token})
    } else {
      res.status(401).json({ message: 'Invalid credentials'})
    }
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signUpHandler, signInHandler }