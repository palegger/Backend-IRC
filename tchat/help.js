module.exports = function(socket, commandes) {

    commandeList = new Array(commandes);
    commandeList.push('/clear');

    socket.emit('push', {name:'Serveur', content: 'Voici la liste des commandes disponible : ' + commandeList});
}