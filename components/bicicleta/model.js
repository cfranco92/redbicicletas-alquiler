// By Cristian Franco
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    bicycleId: String,
    color: String,
    model: String,
    latitude: Number,
    longitude: Number,
    user: String
});

const model = mongoose.model('Bicicleta', mySchema);
module.exports = model;