const { Router } = require('express');
const userRouter = Router();
const { signUpHandler, signInHandler } = require('../handlers/userHandlers.js');

userRouter.use('/sign-up', signUpHandler);
userRouter.use('/sign-in', signInHandler);

module.exports = userRouter;
