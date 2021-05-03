import express from "express";
import expectController from "../controller/expectationController";
import {verifyUser} from "../middleWare/userVerification.js";
import Validator from "../middleWare/validator";

const expectRoute = express.Router();

expectRoute.post("/expect/create",verifyUser,Validator.validateInput, expectController.createExpect);
expectRoute.get('/expect/all', verifyUser,expectController.getAllExpect);
expectRoute.get('/expect/one/:id', verifyUser,expectController.getOneExpect);


export default expectRoute;