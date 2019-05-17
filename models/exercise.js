'use strict'
const mongoose = require('mongoose');

const User = mongoose.model('./user');
const Schema = mongoose.Schema;

/*
User schema:
name
description
duration
date
*/

var exerciseSchema = Schema({
  description: String,
  duration: Number,
  date: Date,
  createdAt: {type: Date, default: Date.now()},
  updatedAt: {type: Date, default: Date.now()},
  user:{ type: Schema.ObjectId, ref: "User" }
  
});

module.exports = mongoose.model('exercises', exerciseSchema);
