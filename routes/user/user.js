'use strict'

const express = require('express');
const UserController = require ('../../controller/user/user')

var api = express.Router();

api.get('/prueba', UserController.pruebas);
api.post('/registrar', UserController.saveUser);

module.exports = api;