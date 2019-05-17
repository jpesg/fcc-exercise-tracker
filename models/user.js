'use strict'
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/*
User schema:
name
description
duration
date
*/

var userSchema = Schema({
  name: String,  
  createdAt: {type: Date, default: Date.now()},
  updatedAt: {type: Date, default: Date.now()},
  
});

module.exports = mongoose.model('users', userSchema);