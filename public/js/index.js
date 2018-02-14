var socket = io();

socket.on('connect', function () {
  console.log('connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('New Message coming', message);
});
socket.on('Greeting', function (message) {
  console.log('Greeting message', message);
});
socket.on('newUser', function (message) {
  console.log('New user coming', message);
});
