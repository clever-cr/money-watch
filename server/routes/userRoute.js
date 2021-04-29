import express from "express";
import UserController from "../controller/userController";
import Validator from "../middleWare/validator";
import { verifyUser } from "../middleWare/userVerification";

const userRoute = express.Router();

userRoute.post(
  "/user/signup",
  Validator.newAccountSignUpRules(),
  Validator.validateInput,
  UserController.SignUp
);

userRoute.post(
  "/user/signin",
  Validator.newLoginRules(),
  Validator.validateInput,
  UserController.SignIn
);

userRoute.put(
  "/user/update-password",
  verifyUser,
  Validator.validateInput,
  UserController.changePassword
);

userRoute.put(
  "/user/update-user-info",
  Validator.newUpdateUserInfo(),
  verifyUser,
  Validator.validateInput,
  UserController.updateUser
);

export default userRoute;
