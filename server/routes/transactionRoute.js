import express from "express";
import transactionController from "../controller/transactionController.js";
import validator from "../middleWare/validator";
import { verifyUser } from "../middleWare/userVerification.js";

const transactionRoute = express.Router();

transactionRoute.post(
  "/transaction/add/:id",
  verifyUser,
  validator.transactionRules(),
  validator.validateInput,
  validator.validateTransactionType,
  transactionController.addTransaction
);

export default transactionRoute;
