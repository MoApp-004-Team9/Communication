var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
//연결 이벤트 시에 콜백으로 socket이 매개변수로 들어가며, 안쪽에서 이벤트에 따른 분기처리를 한다. 

http.listen(3000, function () {
    console.log("server on 3000");
});


app.get('/', function () {
     console.log('connect');
});

app.get('/lightOn', function () {
    console.log('lightOn');
})
 
app.get('/lightOff', function () {
    console.log('lightOff');
})

app.get('/airconOn', function () {
    console.log('airconOn');
})

app.get('/airconOff', function () {
    console.log('airconOff');
})

app.get('/boilerOn', function () {
    console.log('boilerOn');
})

app.get('/boilerOff', function () {
    console.log('boilerOff');
})