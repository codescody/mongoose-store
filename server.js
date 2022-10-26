const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const retroController = require('./controllers/retros')

require('dotenv').config()
const PORT = process.env.PORT

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use("/retro", retroController)
app.use(express.static('public'))

const db = mongoose.connection
db.on("error", (err) => console.log(err.message + " is mongo not running?"))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

app.listen(PORT)