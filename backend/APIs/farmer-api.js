// Create mini express
const exp = require('express')
const farmerApp = exp.Router()

// To handle asynchronous errors
const expressAsyncHandler = require('express-async-handler')

// To encrypt and decrypt passwords
const bcryptjs = require('bcryptjs')

// To generate dynamic web tokens
const jwt = require('jsonwebtoken')
const verifyToken = require('../Middlewares/verifyToken')

// Middleware to get the farmer and tools objects
let farmerObj, toolObj;
farmerApp.use((req, res, next) => {
  farmerObj = req.app.get('farmers')
  toolObj = req.app.get('tools')
  next()
})

// Route to register
farmerApp.post('/register', expressAsyncHandler(async (req, res) => {
  let farmer = req.body
  const dbfarmer = await farmerObj.findOne({ username: farmer.username })
  if (dbfarmer !== null)
    res.send({ message: "Farmer already exists" })
  else {
    const hash = await bcryptjs.hash(body.password, 7)
    body.password = hash
    await farmerObj.insertOne(body)
    res.send({ message: "Farmer registered successfully" })
  }
}))

// Route to login
farmerApp.post('/login', expressAsyncHandler(async (req, res) => {
  const farmer = req.body
  const dbfarmer = await farmerObj.findOne({ username: farmer.username })
  if (dbfarmer === null)
    res.send({ message: "Invalid username" })
  else {
    const status = await bcryptjs.compare(farmer.password, dbfarmer.password)
    if (status === false)
      res.send({ message: "Invalid password" })
    else {
      const signedToken = jwt.sign({ username: dbfarmer.username }, process.env.SECRET_KEY, { expiresIn: 'id' })
      res.send({ message: "Login successful", token: signedToken, farmer: dbfarmer })
    }
  }
}))