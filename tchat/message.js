const Message = require("../models/Message")

module.exports = function(msg, socket) {

    const message = new Message({
      content: msg.content,
      name: socket.username,
      channel: socket.room
    });

    message.save((err) => {
      if (err) return console.error(err);
    });
  
    if(socket.room != undefined && socket.room.lenght != 0)
      socket.to(socket.room).broadcast.emit('push', msg);
}