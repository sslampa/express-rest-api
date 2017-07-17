const mongoose = require('mongoose')
User = mongoose.model('User')

function getHello(req, res) {
  res.json({
    hello: "Hello, ",
    world: "World!"
  })
}

function getUsers(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err)
    res.json(user)
  })
}

function addUser(req, res) {
  var newUser = new User(req.body)
  newUser.save(function(err, user) {
    if (err)
      res.send(err)
    res.json(user)
  })
}


module.exports = {getHello, getUsers, addUser}
