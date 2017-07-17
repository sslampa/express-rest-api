const mongoose = require('mongoose')
const Schema = mongoose.Schema

var UserSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the user'
  },
  password: {
    type: String,
    Required: 'Please enter a password'
  },
  city: {
    type: String,
  }
})

module.exports = mongoose.model('User', UserSchema)
