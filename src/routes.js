const express = require('express');

const NutricionistController = require('./controllers/NutricionistController');

const routes = express.Router();

routes.get('/findbysubscription/:subs', NutricionistController.index);

routes.get('/',(req, res)=>{
    return res.status(200).send(
        'USE THE ROUTE /findbysubscription/(HERE THE SUBSCRIPTION IN NUMBERS) TO SEARCH BY SUBSCRIPTION IN CFN\n\nMORE ROUTES COMING SOON'
    )
});

module.exports = routes;