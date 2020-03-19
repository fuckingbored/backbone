import validateUserRegistration from '../../../../middlewares/auth/validateUserRegistration';
import registerUser from '../../../../middlewares/auth/registerUser';

const RegisterUser = {
    method: "POST",
    enabled: true,
    path: "/user/register",
    handler: [validateUserRegistration, registerUser]
}

export default RegisterUser;