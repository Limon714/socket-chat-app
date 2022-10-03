const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(expressServer);


let buy = io.of("/buy");
buy.on('connection', function (socket) {
    console.log("New user connected")
    buy.emit('MyEvent', "Hello Limon")
    
});

let sell = io.of("/sell");
sell.on('connection', function (socket) {
    console.log("New user Disconnected")
    sell.emit('MyEvent', "Hello Selling")
    
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

expressServer.listen(3000, function () {
    console.log("server run at 3000 port");
})