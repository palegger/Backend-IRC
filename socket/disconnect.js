module.exports = function(socket,listOfUsers) {

    listOfUsers.delete(socket.id);
}