import express from 'express';
import savingController from "../controller/savingController.js";

const savingRoute = express.Router();


savingRoute.post('/savings/create', savingController.createSaving);
savingRoute.get('/savings/all', savingController.getAllSaving);
savingRoute.delete('/savings/delete/:id', savingController.deleteOneSaving);
savingRoute.get('/savings/one/:id', savingController.getOneSaving);
savingRoute.patch('/savings/update/:id', savingController.addCategory);
export default savingRoute;