const AmazonCognitoIdentity = require("amazon-cognito-identity-js");

//logins a user given login credentials
async function confirmRegistration(req, res) {
  let userData = {
    Username: req.params.username || req.params.email,
    Pool: this.binds.cognitoData.userPool
  };

  let cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  let confirmRes = await new Promise((resolve, reject) => {
    cognitoUser.confirmRegistration(req.params.confirmationtoken, true, function(err, result) {
        if(err)
            reject(err);
        resolve(result);
    });
  });

  Object.assign(req.payload, confirmRes);
  req.message = "Success: Confirmed User Email";
}

export default confirmRegistration;
