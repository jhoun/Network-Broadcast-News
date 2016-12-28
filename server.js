//grabs nodes net module
const net = require('net');
var clientsArr = [];

//creates a server
var server = net.createServer((client) => {
  //immediately pushes new client to clientsArr when client connect
  client.write('Please create user name\n' );
  clientsArr.push(client);


  //recieves the data from client
  client.on('data', (data) => {

    // //writes it back to the client who sent it
    // client.write(data.toString());

    //checks if client has client.name value
    if(client.name === undefined){
      //checkts to see if your username is 'admin'
      if (data.toString().trim().toLowerCase() === 'admin'){
        client.write('invalid user name\n');
        client.write('Please create another user name\n' );
      } else {
      //assigns the client data to client name
      client.name = data.toString().trim();
      }
    } else {
      //loops through all clients in clientsArr
      for (var i = 0; i < clientsArr.length; i++){

        //if the client matches the client who sent the message
        if(clientsArr[i].name === client.name){

        } else {
          // write this message to all clients
          clientsArr[i].write(client.name + ": " + data.toString());
        }
      }
    }

  });

  //shows when ends
  client.on('end', () => {
    for (var i = 0; i < clientsArr.length; i++){
      //if client in the array equals this client
      if (clientsArr[i] === client){
      //then remove this client from the array
      clientsArr.splice(clientsArr[i], 1);
      console.log(clientsArr.length);
      console.log('client has been disconnected');
      }
    }

    // process.stdin.on('data', (data) => {
    //   if (data.toString().trim() === 'kick'){
    //     console.log('it works');
    //   }
    // });

  });


  //this will appear if client emits error
  client.on('error', (err) => {
    throw err;
  });

});


//admin broadcast(should be its own seperate event outside)
process.stdin.on('data', (data) => {
  // if (data.toString().trim() === 'kick'){
  //   clientsArr[0].end('fuck you');
  // }
  for (var i = 0; i < clientsArr.length; i++){
    clientsArr[i].write('[ADMIN] ' + data.toString());
  }
});

//this will appear if SERVER emits error
server.on('error', (err) => {
  throw err;
});


//starts your server
server.listen(6969,() => {
  console.log('opened server on', server.address());
});
