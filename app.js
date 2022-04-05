'use strict'

var express = require('express')
var bodyParser = require('body-parser')

var app = express()

//csrgar rutas
var user_routes = require('./routes/user/user');
//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



//rutas
app.use('/api', user_routes);


module.exports = app;