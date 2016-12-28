const net = require('net');


//connects you to the socket from server
const client = net.connect({port: 6969}, () => {
  //you can see all the objects from the socket
  // console.log(client);

  //this writes to the server your string
  //process.stdin allows you to input your data
  process.stdin.on('data', (data) => {
    client.write(data.toString());
  });


  console.log('connected to the server!');
})

// server writes it back to you
//process.stdout allows you to see the data
client.on('data', (data) => {
  process.stdout.write(data.toString());
})