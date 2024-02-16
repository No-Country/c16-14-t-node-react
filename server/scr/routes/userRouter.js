const { Router } = require('express');
const userRouter = Router();
const { signUpHandler } = require('../handlers/userHandlers.js');

userRouter.use('/sign-up', signUpHandler);

module.exports = userRouter;
