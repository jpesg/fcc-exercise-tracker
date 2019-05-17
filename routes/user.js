'use strict'
var express = require('express');
var user = require('../controllers/user');

var api = express.Router();

api.get('/hello', user.hello);
api.get('/users', user.getUsers);
api.post('/exercise/new-user/:username?', user.newUser);
api.post('/exercise/add/:userId', user.userAdd);

module.exports = api;