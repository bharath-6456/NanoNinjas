// Create mini express
const exp = require('express')
const contractorApp = exp.Router()

// To handle asynchronous errors
const expressAsyncHandler = require('express-async-handler')

// To encrypt and decrypt passwords
const bcryptjs = require('bcryptjs')

// To generate dynamic web tokens
const jwt = require('jsonwebtoken')
const verifyToken = require('../Middlewares/verifyToken')

// Middleware to get the contractor and tools objects
let contractorObj, toolObj;
contractorApp.use((req, res, next) => {
  contractorObj = req.app.get('contractors')
  toolObj = req.app.get('tools')
  next()
})

// Route to register
contractorApp.post('/register', expressAsyncHandler(async (req, res) => {
  let contractor = req.body
  const dbcontractor = await contractorObj.findOne({ username: contractor.username })
  if (dbcontractor !== null)
    res.send({ message: "Contractor already exists" })
  else {
    const hash = await bcryptjs.hash(body.password, 7)
    body.password = hash
    await contractorObj.insertOne(body)
    res.send({ message: "Contractor registered successfully" })
  }
}))

// Route to login
contractorApp.post('/login', expressAsyncHandler(async (req, res) => {
  const contractor = req.body
  const dbcontractor = await contractorObj.findOne({ username: contractor.username })
  if (dbcontractor === null)
    res.send({ message: "Invalid username" })
  else {
    const status = await bcryptjs.compare(contractor.password, dbcontractor.password)
    if (status === false)
      res.send({ message: "Invalid password" })
    else {
      const signedToken = jwt.sign({ username: dbcontractor.username }, process.env.SECRET_KEY, { expiresIn: 'id' })
      res.send({ message: "Login successful", token: signedToken, contractor: dbcontractor })
    }
  }
}))