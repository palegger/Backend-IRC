const Channel = require("../models/Channel")

module.exports = function(msg, socket) {

    if(msg.content.split(' ').length == 1) {
        Channel.find().exec((err, channels) => {

            let listChannel = new Array();

            for(let i = 0; i < channels.length; i++) {
                listChannel.push(channels[i].channelName);
            }

            if(err) {
                socket.emit('push', {name:'Serveur', content:'Une erreur est survenue lors de la recherche.'});
            }
            else {
                socket.emit('push', {name:'Serveur', content:'Voici la liste des channels : ' + listChannel});
            }
        });
    }
    else {
        
        Channel.find({channelName: new RegExp(msg.content.slice(6), 'i')}).exec((err, channels) => {

            let listChannel = new Array();

            for(let i = 0; i < channels.length; i++) {
                listChannel.push(channels[i].channelName);
            }

            if(err) {
                socket.emit('push', {name:'Serveur', content:'Une erreur est survenue lors de la recherche.'});
            }
            else {
                socket.emit('push', {name:'Serveur', content:'Voici la liste des channels : ' + listChannel});
            }
        });
    }
}