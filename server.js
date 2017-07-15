const express = require('express')
const app = express()
const port = 8080


app.get('/api/hello-world', (req, res) => {
    res.json({first: "Hello", second: "World"})
})

app.get('/', (req, res) => {
    res.send('This is the opening page')
})

app.listen(port, () => {
    console.log("Listening on port: " + port)
})
