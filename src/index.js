require('dotenv').config()

const express = require('express')
const session = require('express-session')
const request = require('request-promise')

const app = express()

app.use(session({
  secret: 'your_secret_here',
  resave: false,
  saveUninitialized: true
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000')
})