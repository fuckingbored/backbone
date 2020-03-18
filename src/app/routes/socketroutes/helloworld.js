const Helloworld = {
    event: "helloworld",
    enabled: true,
    handler: 
      (server, socket) => {
        server.emit('message', "New User Connected!");
        console.log("New User Connected!")
      }
    
  };
  
  export default Helloworld;
  