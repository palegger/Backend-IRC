const Channel = require("../models/Channel")

module.exports = function(msg, socket) {

    const channel = new Channel({
        channelName: msg.content.slice(8),
        creator: socket.username,
    });

    channel.save((err) => {
        if(err) {
             return console.error(err)
        }
        else {
            socket.emit('push', {name:'Serveur', content:'Le channel ' + msg.content.slice(8) + ' a bien était crée.'});
        }
    });
}