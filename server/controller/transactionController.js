import transactionData from "../model/transactionModel.js";
import Response from "../helpers/Response.js";
import IncomeData from "../model/incomeModel.js";
//import savingData from "../model/savingModel.js";
//import expenseData from "../model/expensesModel.js";

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

let transTotal=0;

    transData.forEach(element => {
        console.log(element.amount)
        transTotal= transTotal+element.amount;
    });


    return Response.successMessage(
      res,
      "Transaction added successfully",
      {transaction:updatedTransaction, transactionTotal:transTotal},
      201
    );
  };
}
export default transactionController;
