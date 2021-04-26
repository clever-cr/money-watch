import express from 'express';
import savingController from "../controller/savingController.js";
import {verifyUser} from "../middleWare/userVerification.js";
const savingRoute = express.Router();


savingRoute.post('/savings/create',verifyUser, savingController.createSaving);
savingRoute.get('/savings/all', verifyUser,savingController.getAllSaving);
savingRoute.delete('/savings/delete/:id',verifyUser, savingController.deleteOneSaving);
savingRoute.get('/savings/one/:id', verifyUser,savingController.getOneSaving);
savingRoute.patch('/savings/update/:id',verifyUser, savingController.addCategory);
export default savingRoute;