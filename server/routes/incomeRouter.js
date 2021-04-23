import express from "express";
import IncomeController from "../controller/incomeController.js" ;



const incomeRouter = express.Router();
incomeRouter.post('/income/create',IncomeController.createIncome);
 incomeRouter.get('/income/getall',IncomeController.getAllIncomes);
 incomeRouter.get('/income/getone/:id',IncomeController.getOneIncome);
 incomeRouter.delete('/income/deleteone/:id',IncomeController.deleteOneIncome);
 incomeRouter.patch('/income/update/:id',IncomeController.updateIncome);




export default  incomeRouter;