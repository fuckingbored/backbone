const DeleteRoom = {
    event: "disconnect",
    enabled: true,
    handler:
        function () {
            //check if the user is the owner of the room and if users are still connected
            if (this.rooms[this.socket.id])
                delete this.rooms[this.socket.id];
            console.log(`SUCCESS: Deleted room ${this.socket.id}`);
        }
};

export default DeleteRoom;
