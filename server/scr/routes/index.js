const { Router } = require('express');
const userRouter = require('./userRouter');
const recipeRouter = require('./recipeRouter')

const router = Router();

router.use('/user', userRouter);
router.use('/recipe', recipeRouter);

module.exports = router;