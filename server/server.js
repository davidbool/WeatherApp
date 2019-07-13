const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require(`./routes/api`)
const City = require(`../server/modules/city`)
const path = require('path')

app.use(express.static(path.join(__dirname,"..", 'dist')))
app.use(express.static(path.join(__dirname,"..", 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', api)



app.listen(3000, function() {
    console.log("Server up and running on port 3000")
  })