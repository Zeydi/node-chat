const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;


const app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New User connected');

  socket.emit('newMessage', generateMessage('admin', 'Welcome to the chat app')),


  socket.broadcast.emit('newMessage', generateMessage('admin', 'new user joined'))
    socket.on('createMessage', (message, callback) => {
    console.log('created new Message', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('this is from the server');
  })
    /*socket.broadcast.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    })*/



  socket.on('disconnect', (socket) => {
    console.log('Disconnected');
  })
});



server.listen(port, () => {
  console.log(`server up at ${port}`)
});
