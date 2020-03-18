const Helloworld = {
    event: "helloworld",
    enabled: true,
    handler: 
      function (message) {
        console.log(message)
        this.server.emit('message', message);
      }
  };
  
  export default Helloworld;
  