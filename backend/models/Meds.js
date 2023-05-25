const mongoose = require('mongoose');

const medSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    price: String
});

const Meds = mongoose.model("Med",medSchema)

module.exports = Meds;