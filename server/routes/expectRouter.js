import express from "express";
import expectController from "../controller/expectationController";
import {verifyUser} from "../middleWare/userVerification.js";

const expectRoute = express.Router();

expectRoute.post("/expect/create",verifyUser,expectController.createExpect);


export default expectRoute;