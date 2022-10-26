const express = require('express')
const retroRouter = express.Router()
const retroData = require('../models/seed')
const Retro = require('../models/retro.js')
console.log(Retro)
// Index Route
retroRouter.get("/", (req, res) => {
    Retro.find({}, (error, allRetros) => {
      res.render("index.ejs", {
        retros: allRetros,
      })
    })
  })

// New Route
retroRouter.get('/new', (req, res) => {
    res.render('new.ejs')
})

// Create Route
retroRouter.post('/', (req, res) => {
    Retro.create(req.body, (error, createdRetro) => {
        console.log(createdRetro)
        console.log(req.body)
        console.log(error)
        res.redirect('/retro')

    })
})

module.exports = retroRouter