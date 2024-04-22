// Create express app
const exp = require('express')
const app = exp()

// Environment variables for secrecy
require('dotenv').config()

// To parse body of request
app.use(exp.json())

// Importing database
const mongodb = require('mongodb').MongoClient

// Deploying react build to this server
const path = require('path')
app.use(exp.static(path.join(__dirname, '../client/build')))

// Database connection
mongodb.connect(process.env.DB_URL)
  .then(client => {
    const toolobj = client.db('toolsdb')
    const users = toolobj.collection('userscollection')
    app.set('users', users)
    console.log("DB connection established")
  })
  .catch(err => console.log("Error in DB connection", err))

// Importing Api
const userApp = require('./user-api')

// Sending requests to route
app.use('/user-api', userApp)

// Handling page refresh
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

// Error handling
app.use((err, req, res, next) => {
  res.send({ message: "Error occured", payload: err.message })
})

// Port from .env
let port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening in on ${port}`))