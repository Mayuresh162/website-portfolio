var express = require('express');
var app = express();


var http = require('http').createServer(app);

var io = require('socket.io')(http, {
    cors: {
      origin: '*',
    }
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


http.listen(process.env.PORT || 3000, function() {
    console.log('Server Connected');

    io.on('connection', function(socket) {
        console.log('User ' + socket.id);

        socket.on('messageSent', function(message) {
            socket.broadcast.emit("messageSent", message)
        })
    });
    
});
