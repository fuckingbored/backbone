const Login = {
    event: "login",
    enabled: true,
    handler: 
      function(username) {
        console.log(username)
        this.socket.emit('message', message);
      }
  };
  
  export default Login;
  