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

// Update Route
retroRouter.put("/:id", (req, res) => {
  Retro.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
    (error, updatedRetro) => {
      res.redirect(`/retro/${req.params.id}`)
    }
    )
})

// Create Route
retroRouter.post('/', (req, res) => {
    Retro.create(req.body, (error, createdRetro) => {
        res.redirect('/retro')
    })
})

// Edit Route
retroRouter.get("/:id/edit", (req, res) => {
  Retro.findById(req.params.id, (error, foundRetro) => {
    res.render("edit.ejs", {
      retro: foundRetro,
    })
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