import ValidateRegistrationConfirmation from "../../../../middlewares/auth/validateRegistrationConfirmation";
import confirmRegistration from "../../../../middlewares/auth/confirmRegistration";

const LoginUser = {
  method: "POST",
  enabled: true,
  path: "/user/confirm",
  handler: [ValidateRegistrationConfirmation, confirmRegistration]
};

export default LoginUser;
