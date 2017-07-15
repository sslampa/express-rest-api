function getHello(req, res) {
  res.json({
    hello: "Hello, ",
    world: "World!"
  })
}

module.exports = {getHello}
