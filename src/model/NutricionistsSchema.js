const { Schema, model } = require('mongoose');

const NutricionistSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    subscription:{
        type: Number,
        required: true,
    },
    crn:{
        type: String,
        required: true
    },
    situation: {
        type: String,
        required: true
    },
    subscriptionType:{
        type: String,
        required: true
    },
    lastUpdate:{
        type: String,
        required: true
    },
},{
    timestamps: true
});

module.exports = model('Nutricionist', NutricionistSchema);