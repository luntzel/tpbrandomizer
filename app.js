/* eslint no-var: off */
// Load Node modules
var express = require('express')
// Initialise Express
var app = express()
// Render static files
app.use(express.static('public'))
