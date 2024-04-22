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
app.use(exp.static(path.join(__dirname, '../build')))

// Database connection
mongodb.connect(process.env.DB_URL)
  .then(client => {
    const blogobj = client.db('blogdb')
    const farmers = blogobj.collection('farmerscollection')
    const contractors = blogobj.collection('contractorscollection')
    app.set('farmers', farmers)
    app.set('contractors', contractors)
    console.log("DB connection established")
  })
  .catch(err => clg("Error in DB", err))

// Importing Apis
const farmerApp = require('./APIs/farmer-api')
const contractorApp = require('./APIs/contractor-api')

// Sending requests to resp routes
app.use('/farmer-api', farmerApp)
app.use('/contractor-api', contractorApp)

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