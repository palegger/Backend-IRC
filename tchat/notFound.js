module.exports = function(socket) {

    socket.emit('push', {name:'Serveur', content:'La commande n\'a pas était reconnu.'});
}