const express = require('express')
const retroRouter = express.Router()
const retroData = require('../models/seed')
const Retro = require('../models/retro.js')
console.log(Retro)

// Buy Route
retroRouter.put('/:id/buy', (req, res) => {
  Retro.findById(req.params.id, (error, foundRetro) =>{
    foundRetro.qty -= 1;
    foundRetro.save();
    res.redirect(`/retro/${req.params.id}`)
  })
})

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

// Delete Route
retroRouter.delete("/:id", (req, res) => {
  Retro.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/retro")
  })
})

// Update Route
retroRouter.put("/:id", (req, res) => {
  let editedRetro = {
    name: req.body.name,
    description: req.body.description,
    img: req.body.img,
    price: req.body.price,
    qty: req.body.qty,
  }
  Retro.findByIdAndUpdate(
    req.params.id,
    editedRetro,
    (error, updatedRetro) => {
      updatedRetro[req.params.id] = editedRetro
      res.redirect(`/retro/${req.params.id}`)
    }
    )
})

// Create Route
retroRouter.post('/', (req, res) => {
    let newRetro = {
      name: req.body.name,
      description: req.body.description,
      img: req.body.img,
      price: req.body.price,
      qty: req.body.qty,
    }
    Retro.create(newRetro, (error, createdRetro) => {
        res.redirect('/retro')
    })
})

// Edit Route
retroRouter.get("/:id/edit", (req, res) => {
  Retro.findById(req.params.id, (error, foundRetro) => {
    res.render("edit.ejs", {
      retro: foundRetro,
      retroId: req.params.id
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