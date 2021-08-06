const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  channelName:{ type : String , unique : true},
  creator: { type : String}
})

module.exports = mongoose.model('Channel', channelSchema);