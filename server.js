//grabs nodes net module
const net = require('net');

//server.address()
var server = net.createServer((socket) => {
  console.log('Welcome', socket);

  // //if socket emits error
  // socket.on('data', (data))
});


server.listen(6969,() => {
  console.log('opened server on', server.address());
});