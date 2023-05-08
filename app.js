const express = require('express')
const app = express()
var routesHome = require('./routes/v1')
var routesWelcome = require('./routes/v1/welcome')
var routesFiles = require('./routes/v1/files')
var path = require('path')
var cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extend: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use('/', routesWelcome)
app.use('/api/v1', routesHome)
app.use('/api/v1', routesFiles)

module.exports = app
