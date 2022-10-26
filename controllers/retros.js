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
        res.redirect('/retro')
    })
})

// Show Route
retroRouter.get("/:id", (req, res) => {
    Retro.findById(req.params.id, (err, foundRetro) => {
      res.render("show.ejs", {
        retro: foundRetro,
      })
    })
  })

module.exports = retroRouter