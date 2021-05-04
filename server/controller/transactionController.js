import transactionData from "../model/transactionModel.js";
import Response from "../helpers/Response.js";
// import IncomeData from "../model/incomeModel.js";
// import expenseData from "../model/expensesModel.js";
//import savingData from "../model/savingModel.js";

class transactionController {
  static addTransaction = async (req, res) => {
    const transIdFromParams = req.params.id;

    const newTransaction = await transactionData.findByIdAndUpdate(
      transIdFromParams,
      {
        $push: {
          transactions: req.body,
        },
      }
    );

    const updatedTransaction= await transactionData.findById(transIdFromParams);

const transData= updatedTransaction.transactions;


let transTotalExpense=0;
let transTotalIncome=0;
let transTotalSaving=0;

    transData.forEach(element => {
        console.log(element);
        if(element.transactionType==="expense")
        transTotalExpense= transTotalExpense+element.amount;
        if(element.transactionType==="income")
        transTotalIncome= transTotalIncome+element.amount;
        if(element.transactionType==="savings")
        transTotalSaving= transTotalSaving+element.amount;
        // console.log(transTotalExpense)
    });
  
return Response.successMessage(
      res,
      "Transaction added successfully",
      {transaction:updatedTransaction, totalIncome:transTotalIncome, totalSaving:transTotalSaving, 
        totalExpense:transTotalExpense},
      201
    );

  //   const updatedTransact= await transactionData.findById(expenseCategoryId);

  //   const updatedTransExpenses = updatedTransact.expectedAmount;

  //   let transactionTotalExpense=0;
  //   let transactionTotalIncome=0;
  //   let transactionTotalSaving=0;

  //   updatedTransExpenses.forEach(element=>{

  //     transactionTotalExpense= element.expectedAmount-transactionTotalExpense

  //   });

  //   return Response.successMessage(res, 
  //     "Transaction added successfully",{Expense:updatedTransExpenses, actualTransaction:transactionTotalExpense },
  //      201);
  };
  
}
export default transactionController;
