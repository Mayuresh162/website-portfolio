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

app.get('/assets/css/styles.css', function(req, res){
    res.sendFile(__dirname + '/assets/css/styles.css');
});

app.get('/assets/css/swiper-bundle.min.css', function(req, res){
    res.sendFile(__dirname + '/assets/css/swiper-bundle.min.css');
});

app.get('/assets/img/about_me_5.jpg', function(req, res){
    res.sendFile(__dirname + '/assets/img/about_me_5.jpg');
});

app.get('/assets/img/AC_Logo_Horizontal_onWhite.jpg', function(req, res){
    res.sendFile(__dirname + '/assets/img/AC_Logo_Horizontal_onWhite.jpg');
});

app.get('/assets/img/download.png', function(req, res){
    res.sendFile(__dirname + '/assets/img/download.png');
});

app.get('/assets/img/my-photo.png', function(req, res){
    res.sendFile(__dirname + '/assets/img/my-photo.png');
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
