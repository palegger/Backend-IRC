const Channel = require("../models/Channel")

module.exports = function(msg, socket) {

    Channel.deleteOne({channelName: msg.content.slice(8), creator: socket.username},(err, channel) => {
        if(err) {
             return console.error(err)
             socket.emit('push', {name:'Serveur', content:'Une erreur est survenue lors de la supression.'});
        }
        else {
            if(channel.n == 0) {
                socket.emit('push', {name:'Serveur', content:'Vous ne possédez pas ce channel.'});
            }
            else {
                socket.emit('push', {name:'Serveur', content:'Le channel ' + msg.content.slice(8) + ' a bien était suprimé.'});
            }
        }
    });
}