const express = require('express');

const NutricionistController = require('./controllers/NutricionistController');

const routes = express.Router();

routes.get('/:subs', NutricionistController.index);


module.exports = routes;