import express from 'express';
import expenseController from "../controller/expensesController.js";
import {verifyUser} from "../middleWare/userVerification.js";
const expenseRoute = express.Router();


expenseRoute.post('/expenses/create', verifyUser,expenseController.createExpenses);
expenseRoute.get('/expenses/all', verifyUser,expenseController.getAllExpenses);
expenseRoute.delete('/expenses/delete/:id',verifyUser, expenseController.deleteOneExpenses);
expenseRoute.get('/expenses/one/:id', verifyUser,expenseController.getOneExpenses);
expenseRoute.patch('/expenses/update/:id', verifyUser,expenseController.addCategory)
export default expenseRoute;