const express = require('express');
const mongoose = require('mongoose');
//const cors = require('cors');

const server = express();

const routes = require('./routes');
const { user, password } = require('./db.env');

mongoose.connect(
    `mongodb+srv://${user}:${password}@nutricionistas.rppio.mongodb.net/Nutricionistas?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if(!err) console.log('Connected to DataBase!');
    }
)

server.use(express.json());
server.use(routes);

server.listen(process.env.PORT || 3333);