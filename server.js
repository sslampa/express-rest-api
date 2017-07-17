const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const User = require('./api/models/user')
const port = 8080
const hello = require('./api/controller/hello')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Somedb')
  .then(() => console.log('Connection Successful'))
  .catch((err) => console.error(err))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.get('/api/hello-world', (req, res) => {
    res.json({first: "Hello", second: "World"})
})

app.get('/api/hello', hello.getHello)

app.route('/api/users')
  .get(hello.getUsers)
  .post(hello.addUser)

app.get('/', (req, res) => {
    res.send('This is the opening page')
})

app.listen(port, () => {
    console.log("Listening on port: " + port)
})

module.exports = app
