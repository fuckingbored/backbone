const Helloworld = {
    event: "helloworld",
    enabled: true,
    handler: 
      function (message) {
        console.log(message)
        this.server.emit('message', "New User Connected!");
      }
  };
  
  export default Helloworld;
  