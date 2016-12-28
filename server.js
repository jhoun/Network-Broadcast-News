//grabs nodes net module
const net = require('net');
var clients = [];

//server.address()
var server = net.createServer((socket) => {
  //welcomes you to the server
    clients.push(socket);

  //recieves the string from client and prints in server
  socket.on('data', (data) => {
    // //the string from client is being written in the server
    // socket.write(data.toString());

    //saves the data from client to an array
    for (var i = 0; i < clients.length; i ++){
      //writes to every client in the array
      if(clients[i] === socket){
        return;
      } else{
      clients[i].write(data.toString())
      }
    }

  });

  //shows when ends
  socket.on('end', () => {
    console.log("you have been disconnected");
  })

  //this will appear if SOCKET emits error
  socket.on('error', (err) => {
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
