const express = require('express')
const mongoose = require('mongoose')

const app = express()
const apiRouter = require('../backend/router/api')
const apiUser  = require('../backend/router/user')

mongoose.connect('mongodb+srv://ben_13:lbn5QE6TfWM1DNm6@cluster0.fhjeudv.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))

app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/mon-api-get',apiRouter)
app.use('/authen',apiUser)

module.exports = app