var express = require('express');
var app = express();

app.use(express.static("public"));

var http = require('http').createServer(app);

var io = require('socket.io')(http, {
    cors: {
      origin: '*',
    }
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
