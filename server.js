const express = require('express')
const app = express()
const port = 8080
const hello = require('./api/controller/hello')


app.get('/api/hello-world', (req, res) => {
    res.json({first: "Hello", second: "World"})
})

app.route('/api/hello')
  .get(hello.getHello)

app.get('/', (req, res) => {
    res.send('This is the opening page')
})

app.listen(port, () => {
    console.log("Listening on port: " + port)
})
