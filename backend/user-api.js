// Create mini express
const exp = require('express')
const userApp = exp.Router()

// To handle asynchronous errors
const expressAsyncHandler = require('express-async-handler')

// To encrypt and decrypt passwords
const bcryptjs = require('bcryptjs')

// To generate dynamic web tokens
const jwt = require('jsonwebtoken')
const verifyToken = require('./Middlewares/VerifyToken')

// Middleware to get the user and tools objects
let userObj, toolObj;
userApp.use((req, res, next) => {
  userObj = req.app.get('users')
  toolObj = req.app.get('tools')
  next()
})

// Route to register
userApp.post('/register', expressAsyncHandler(async (req, res) => {
  let body = req.body
  const dbuser = await userObj.findOne({ username: body.username })
  if (dbuser !== null)
    res.send({ message: "user already exists" })
  else {
    const hash = await bcryptjs.hash(body.password, 7)
    body.password = hash
    await userObj.insertOne(body)
    res.send({ message: "user registered successfully" })
  }
}))

// Route to login
userApp.post('/login', expressAsyncHandler(async (req, res) => {
  const body = req.body
  const dbuser = await userObj.findOne({ username: body.username })
  if (dbuser === null)
    res.send({ message: "Invalid username" })
  else {
    const status = await bcryptjs.compare(user.password, dbuser.password)
    if (status === false)
      res.send({ message: "Invalid password" })
    else {
      const signedToken = jwt.sign({ username: dbuser.username }, process.env.SECRET_KEY, { expiresIn: '1d' })
      res.send({ message: "Login successful", token: signedToken, user: dbuser })
    }
  }
}))

// Export userApp
module.exports = userApp