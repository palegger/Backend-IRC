const express = require("express");
const app = express();
const mongoose = require("mongoose");
const http = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(http);

const url = "mongodb+srv://admin:Password123@cluster0.6qevd.mongodb.net/irc?retryWrites=true&w=majority";
const port = process.env.PORT || 5000;

mongoose.connect( url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
});

const tchat = require('./tchat/tchat');
const disconnect = require('./socket/disconnect');

var listOfUsers = new Map();

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

io.on('connection', (socket) => {
  
    socket.on('message', (msg) => {
      console.log(msg);
      tchat(msg, socket, listOfUsers, io);
    });

    socket.on('disconnect', function() { 
      disconnect(socket, listOfUsers);
    }); 
  });

http.listen(port, () => {
    console.log('Serveur démarré sur le port : ' + port);
});