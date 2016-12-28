//grabs nodes net module
const net = require('net');

//server.address()
var server = net.createServer((socket) => {
  //welcomes you to the server
  console.log('Welcome', socket);

  //shows that data is being sent
  socket.on('data', (data) => {
    console.log('you sent data!');
  });

  //this will appear if SOCKET emits error
  client.on('error', (err) => {
    throw err;
  })

});

//this will appear if SERVER emits error
server.on('error', (err) => {
  throw err;
})


//starts your server
server.listen(6969,() => {
  console.log('opened server on', server.address());
});