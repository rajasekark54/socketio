const express = require('express');
const path = require('path');
const socketio = require('socket.io');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

app.use(express.static(path.resolve(__dirname, 'client')));

const server = app.listen(1337, () => {
  console.log('Server running!');
});

const io = socketio(server);

io.on('connection', (socket) => {
  console.log(`New connection: ${socket.id}`);

  socket.emit('notification', 'Thanks for connecting to Codedamn!');

  socket.on('message', (data) => {
    console.log(`New message from ${socket.id}: ${data}`);
  });
});
