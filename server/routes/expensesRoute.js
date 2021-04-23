import express from 'express';
import expenseController from "../controller/expensesController.js";

const expenseRoute = express.Router();


expenseRoute.post('/expenses/create', expenseController.createExpenses);
expenseRoute.get('/expenses/all', expenseController.getAllExpenses);
expenseRoute.delete('/expenses/delete/:id', expenseController.deleteOneExpenses);
expenseRoute.get('/expenses/one/:id', expenseController.getOneExpenses);
expenseRoute.patch('/expenses/update/:id', expenseController.addCategory)
export default expenseRoute;