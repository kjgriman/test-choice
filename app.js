var routes = require('./routes')
const express = require('express')
var path = require('path')
const { handlerError404 } = require('./middlerware')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extend: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', routes)
app.use(handlerError404)

module.exports = app
