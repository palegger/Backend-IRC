const message = require('./message');
const nick = require('./nick');
const users = require('./users');
const create = require('./create');
const join = require('./join');
const quit = require('./quit');
const deleteChannel = require('./delete');
const list = require('./list');
const PrivateMsg = require('./msg');
const help = require('./help');
const notFound = require('./notFound');
const commandes = ['/nick', '/users', '/create', '/join', '/quit', '/delete', '/list', '/msg', '/help', '/img', '/video', '/musique'];

module.exports = function(msg, socket, listOfUsers, io) {

    if(socket.username != undefined) {
        if(msg.content[0] == '/') {
            let verificationCommande = msg.content.split(' ');
            switch (commandes.indexOf(verificationCommande[0])) {
                case 0:
                    nick(msg, socket, listOfUsers);
                    break;
                case 1:
                    users(socket, listOfUsers, io);
                    break;
                
                case 2:
                    create(msg, socket);
                    break;
                
                case 3:
                    join(msg, socket);
                    break;
                
                case 4:
                    quit(msg, socket);
                    break;

                case 5:
                    deleteChannel(msg, socket);
                    break;

                case 6:
                    list(msg, socket);
                    break;

                case 7:
                    PrivateMsg(msg, socket, listOfUsers, io);
                    break;

                case 8:
                    help(socket, commandes);
                    break;

                case 9: case 10: case 11:
                    message(msg, socket);
                    break;

                default:
                    notFound(socket);
                    break;
            }
        }
        else {
            message(msg, socket);
        }
    }
    else {
        let verificationCommande = msg.content.split(' ');
        switch (commandes.indexOf(verificationCommande[0])) {
            case 0:
                nick(msg, socket, listOfUsers);
                break;

            case 8:
                help(socket, commandes);
                break;

            default:
                notFound(socket);
                break;
        }
    }
}