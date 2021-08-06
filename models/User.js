const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  socketId: String,
  username: String
})

module.exports = mongoose.model('User', userSchema);