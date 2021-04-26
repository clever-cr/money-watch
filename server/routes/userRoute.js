import express from "express";
import UserController from "../controller/userController";
import Validator from "../middleWare/validator";
import { verifyUser } from "../middleWare/userVerification";

const userRoute = express.Router();

userRoute.post(
  "/user/signup",
  Validator.newAccountSignUpRules(),
  Validator.validateInput,
  UserController.UserController.SignUp
);
userRoute.post(
  "/user/signin",
  Validator.newLoginRules(),
  Validator.validateInput,
   
  UserController.UserController.SignIn
);
userRoute.put(
  "/user/update-password",
  verifyUser,
  UserController.UserController.changePassword
);
userRoute.put(
  "/user/update-user-info",
  Validator.newUpdateUserInfo(),
  Validator.validateInput,
  verifyUser,
  UserController.UserController.updateUser
);

export default userRoute;
