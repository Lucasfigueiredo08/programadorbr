// Express server on port 3000

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

// Socket.io

io.sockets.on('connection', function (socket) {
    socket.on('sendchat', function (data) {
        io.sockets.emit('updatechat', socket.username, data);
    });

    socket.on('adduser', function (username) {
        socket.username = username;
        io.sockets.emit('updatechat', 'SERVER', username + ' entrou na sala');
        io.sockets.emit('updateusers', usernames);
    });

    socket.on('disconnect', function () {
        if (!socket.username) return;
        io.sockets.emit('updatechat', 'SERVER', socket.username + ' saiu da sala');
        io.sockets.emit('updateusers', usernames);
    });
});