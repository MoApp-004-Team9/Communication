var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

http.listen(3000, function () {
    console.log("server on 3000");
});


app.get('/', function () {
     console.log('connect');
});

io.on('connection', function (socket) {
    console.log('user connection.');

    socket.on('lightOn', function (data) {
     
    })
});
