const net = require('net');


//connects client from server
const client = net.connect({port: 6969}, () => {
  // you can see all the objects from the client
  // console.log(client);

  //writes data to server
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