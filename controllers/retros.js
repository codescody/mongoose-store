const express = require('express')
const retroRouter = express.Router()
const retroData = require('../models/seed')
const Retro = require('../models/retro.js')

retroRouter.get('/new', (req, res) => {
    res.render('new.ejs')
})

module.exports = retroRouter