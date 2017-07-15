const express = require('express')
const app = express()


app.get('/api/hello-world', (req, res) => {
    res.send({first: "Hello", second: "World"})
})

app.get('/', (req, res) => {
    res.send('This is the opening page')
})

app.listen(8000, () => {
    console.log("Listening on port: " + 8000)
})

