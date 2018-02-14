const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;


const app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New User connected');

  socket.emit('newMessage', {
    from: 'Xavier',
    text: 'Hello doing well',
    createdAt: 123
  });

  socket.on('createMessage', (message) => {
    console.log('created new Message', message);
  })

  socket.on('disconnect', (socket) => {
    console.log('Disconnected');
  })
});



server.listen(3000, () => {
  console.log(`server up at ${port}`)
});
