const Message = require("../models/Message")

module.exports = function(msg, socket, listOfUsers, io) {

    let listOfId = Array.from(listOfUsers.keys());
    let listOfUsername = Array.from(listOfUsers.values());

    let commande = msg.content.split(' ');

    let nomReceveur = commande[1];
    let idReceveur = listOfId[listOfUsername.indexOf(nomReceveur)];

    socket.to(idReceveur).emit('push', {name: 'Message privé de ' + socket.username, content: msg.content.slice(6 + nomReceveur.length)});
}