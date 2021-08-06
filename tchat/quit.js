module.exports = function(msg, socket) {

    channelName = msg.content.slice(6);

    if(channelName == socket.room) {
        socket.leave(socket.room)
        socket.room = '';
        socket.emit('push', {name:'Serveur', content:'Vous avez quitter le channel ' + channelName + '.'});
    }
    else {
        socket.emit('push', {name:'Serveur', content:'Vous ne pouvez pas quitter un channel dans lequel vous n\'êtes pas.'});
    }
}