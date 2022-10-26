const mongoose = require('mongoose')

const retroSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    img: {type: String, required: true},
    price: {type: Number, required: true},
    qty: {type: Number, required: true}
})

const Retro = mongoose.model('retro', retroSchema)

module.exports = Retro