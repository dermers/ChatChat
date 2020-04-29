const express = require('express');
const app = express();
const http = require('http').Server(app);

const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.send('Hello world!');
});

io.sockets.on('connection', (socket) => {
    socket.on('username', (username) => {
        socket.username = username;
        io.emit('is_online', socket.username + ' join the chat..');
    });

    socket.on('disconnect', () => {
        io.emit('is_online', socket.username + ' left the chat..');
    })

    socket.on('chat_message', (message) => {
        io.emit('chat_message', socket.username + ':' + message);
    });
});

const server = http.listen(8080, () => {
    console.log('listening on *:8080');
});