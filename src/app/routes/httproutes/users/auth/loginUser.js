import validateUserLogin from "../../../../middlewares/auth/validateUserLogin";
import loginUser from "../../../../middlewares/auth/loginUser";

const LoginUser = {
  method: "POST",
  enabled: true,
  path: "/user/login",
  handler: [validateUserLogin, loginUser]
};

export default LoginUser;
