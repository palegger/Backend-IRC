module.exports = function(socket, listOfUsers, io) {

    let list = new Array();
    let listOfId = Array.from(listOfUsers.keys());
    let listOfUsername = Array.from(listOfUsers.values());

    io.in(socket.room).clients(function(error,clients) {
        if(clients.length >= 1) {

            let index = 0;
            for(let i = 0; i < clients.length; i++) {
                index = listOfId.indexOf(clients[i]);
                if(index != -1) {
                    list.push(listOfUsername[index]);
                }
                else {
                    socket.emit('push', {name:'Serveur', content:'Une erreur est survenue dans l\'obtention de la liste.'});
                }
            }
            socket.emit('push', {name:'Serveur', content:"Liste des utilisateurs : " + list});
        }
        else {
            socket.emit('push', {name:'Serveur', content:'Il n\'y a personne dans le channel'});
        }
    });
}