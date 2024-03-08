const { Router } = require('express');
const recipeRouter = Router();
const { createRecipeHandler } = require('../handlers/recipeHandlers.js');

recipeRouter.use('/create', createRecipeHandler);

module.exports = recipeRouter;
