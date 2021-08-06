module.exports = function(msg, socket, listOfUsers) {

    let username = msg.content.slice(6);
    if(username != '') {
        if(socket.username == undefined) {
            socket.username = username;
            listOfUsers.set(socket.id, socket.username);
            socket.emit('push', {name:'Serveur', content:"Votre nom est désormait " + socket.username});
        }
        else {
            socket.username = username;
            listOfUsers.set(socket.id, socket.username);
            socket.emit('push', {name:'Serveur', content:"Votre nouveau nom est désormait " + socket.username});
        }
    }
}