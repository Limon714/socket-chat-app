const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(expressServer);

io.on('connection', function (socket) {
    console.log("New user connected")

    socket.on('disconnect', function () {
        console.log("Disconnected")
    })
    // setTimeout(function () {
    //     socket.emit('MyStyle', 'Learn with Limon')
    // }, 4000)

    socket.on('message', function (msg) {
        console.log(msg)
    })
    
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

expressServer.listen(3000, function () {
    console.log("server run at 3000 port");
})