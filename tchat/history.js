const Message = require('../models/Message');

module.exports = function(socket) {

    Message.find({channel:socket.room}).sort({createdAt: -1}).limit(10).exec((err, messages) => {
        if (err) return console.error(err);

        socket.emit('init', messages);
    })
}