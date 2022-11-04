const socket = io();
socket.emit('message', 'Hi');

socket.on('notification', (data) => {
  console.log(`New notification: ${data}`);
});
