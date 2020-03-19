const Helloworld = {
    event: "helloworld",
    enabled: true,
    handler: 
      function (message) {
        console.log(message)
        console.log(`SOCKETID ${this.socket.id}`);
        this.server.emit('message', message);
      }
  };
  
  export default Helloworld;
  