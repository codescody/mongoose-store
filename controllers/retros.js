const express = require('express')
const retroRouter = express.Router()
const retroData = require('../models/seed')
const Retro = require('../models/retro.js')

retroRouter.get('/', (req, res) => {
    res.send('hi')
})

module.exports = retroRouter