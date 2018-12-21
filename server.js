var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

http.listen(3000, function () {
    console.log("server on 3000");
});


app.get('/', function () {
     console.log('connect');
});

var SerialPort = require('serialport'),
    portName = 'COM5',//포트 번호 확인 후 추가
    port = new SerialPort(portName),
    SerialPort = 0;

port.on('open', function () {
    console.log('Serial Port OPEN');

});

io.on('connection', function (socket) {
    console.log('user connection.');

    socket.on('LightOn', function (data) {
        console.log('LightOn');
        port.write(1);
    })
    socket.on('LightOff', function (data) {
        console.log('LightOff');
        port.write(2);
    })
    socket.on('AirOn', function (data) {
        console.log('AirOn');
        port.write(3);
    })
    socket.on('AirOff', function (data) {
        console.log('AirOff');
        port.write(4);
    })
    socket.on('BoilerOn', function (data) {
        console.log('BoilerOn');
        port.write(5);
    })
    socket.on('BoilerOff', function (data) {
        console.log('BoilerOff');
        port.write(6);
    })
});
