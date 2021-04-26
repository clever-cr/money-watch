import express from "express";
import IncomeController from "../controller/incomeController.js" ;
import {verifyUser }from "../middleWare/userVerification.js";


const incomeRouter = express.Router();
incomeRouter.post('/income/create',verifyUser,IncomeController.createIncome);
 incomeRouter.get('/income/getall',verifyUser,IncomeController.getAllIncomes);
 incomeRouter.get('/income/getone/:id',verifyUser,IncomeController.getOneIncome);
 incomeRouter.delete('/income/deleteone/:id',verifyUser,IncomeController.deleteOneIncome);
 incomeRouter.patch('/income/update/:id',verifyUser,IncomeController.addCategory);




export default  incomeRouter;