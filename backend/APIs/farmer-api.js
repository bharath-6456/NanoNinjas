// Create mini express
const exp = require('express')
const adminApp = exp.Router()

// To handle asynchronous errors
const expressAsyncHandler = require('express-async-handler')

// To encrypt and decrypt passwords
const bcryptjs = require('bcryptjs')

// To generate dynamic web tokens
const jwt = require('jsonwebtoken')
const verifyToken = require('../Middlewares/verifyToken')

// Middleware to get the admin object
let farmerObj, toolObj;
farmerApp.use((req, res, next) => {
  farmerObj = req.app.get('farmers')
  toolObj = req.app.get('tools')
  next()
})