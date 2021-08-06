const Channel = require("../models/Channel")
const history = require('./history');

module.exports = function(msg, socket) {

    channelName = msg.content.slice(6);
    if(channelName == '') {
        socket.emit('push', {name:'Serveur', content:'Le nom de channel spécifier n\'est pas valide'});
    }
    else {
        Channel.find({channelName: channelName}).exec((err, channels) => {
            if (err) {
                socket.emit('push', {name:'Serveur', content:'Un problème est survenue lors de la tentative pour rejoindre le channel'});
            }
            else if(channels.length == 1) {
                if(socket.room != undefined && socket.room.lenght != 0)
                    socket.leave(socket.room);
                socket.join(channelName);
                socket.emit('push', {name:'Serveur', content:'Tu a rejoin le channel ' + channelName + '.'});
                socket.room = channelName;
                history(socket);
            }
            else {
                socket.emit('push', {name:'Serveur', content:'le channel demandé n\'existe pas'});
            }
        });
    }
}