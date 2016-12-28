//grabs nodes net module
const net = require('net');
var clientsArr = [];

//creates a server
var server = net.createServer((client) => {

  //immediately pushes new client to clientsArr
  clientsArr.push(client);

  //recieves the data from client
  client.on('data', (data) => {
    // //the string from client is being written in the server
    // client.write(data.toString());

    //saves the data from client to an array
    for (var i = 0; i < clientsArr.length; i ++){
      //writes to every client in the array
      if(clientsArr[i] === client){
        return;
      } else{
      clientsArr[i].write(data.toString())
      }
    }

  });

  //shows when ends
  client.on('end', () => {
    console.log("you have been disconnected");
  })

  //this will appear if client emits error
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
