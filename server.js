'use strict'

const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')

//Routes
const userRoutes = require('./routes/user');

const app = express();



app.use(cors())


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

//Routes
app.use('/api/', userRoutes);

module.exports = app;