const CreateRoom = {
    event: "create-room",
    enabled: true,
    handler: 
      function (properties) {
        if(!properties.name && !properties.password) {
            this.socket.emit('error', "ERROR: Missing required parameters, name, password");
        }

        
      }
  };
  
  export default CreateRoom;
  