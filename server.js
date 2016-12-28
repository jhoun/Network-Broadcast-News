//grabs nodes net module
const net = require('net');
var clientsArr = [];

//creates a server
var server = net.createServer((client) => {

  //immediately pushes new client to clientsArr when client connects
  clientsArr.push(client);
  console.log(clientsArr.length, "initial");

  //recieves the data from client
  client.on('data', (data) => {
    // //writes it back to the client whoe sent it
    // client.write(data.toString());


    //loops through all clients in clientsArr
    for (var i = 0; i < clientsArr.length; i++){
      //if the client matches the client who sent the message
      if(clientsArr[i] === client){

      } else {
        // write this message to all clients
        clientsArr[i].write(data.toString());
      }
    }

  });

  //shows when ends
  client.on('end', () => {
    for (var i = 0; i < clientsArr.length; i++){
      if (clientsArr[i] === client){
      clientsArr.splice(clientsArr[i], 1);
      console.log(clientsArr.length, "after");
      console.log('has been disconnected');
      }
    }
  });


  //this will appear if client emits error
  client.on('error', (err) => {
    throw err;
  });



});

//this will appear if SERVER emits error
server.on('error', (err) => {
  throw err;
});


//starts your server
server.listen(6969,() => {
  console.log('opened server on', server.address());
});
