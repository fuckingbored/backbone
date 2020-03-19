const CreateRoom = {
    event: "create-room",
    enabled: true,
    handler: 
      function (properties) {
        if(!properties.name && !properties.password) {
            return this.socket.emit('message', "ERROR: Missing required parameters, name, password");
        }

        if(!this.rooms) {
            this.rooms = {};
        }

        this.rooms[this.socket.id] = {
            name: properties.name,
            password: properties.password,
            connected: [this.socket.id]
        }

        console.log(this.rooms);
        this.socket.emit('message', `SUCCESS: Created new room ${this.socket.id + properties.name}`);
        this.socket.join(this.socket.id + properties.name);
      }
  };
  
  export default CreateRoom;
  