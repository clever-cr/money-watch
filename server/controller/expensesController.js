import expenseData from "../model/expensesModel.js";
import Response from "../helpers/response.js";


class expenseController {

    static createExpenses = async (req, res) => {
        const Data = await expenseData.create(req.body);
        if (!Data) {
            return Response.errorMessage(res, "Failed to enter expenses", 417)
        }
        return Response.successMessage(res, "Expenses entered successfully", Data, 201)
    }

    static getAllExpenses = async (req, res) => {
        const Data = await expenseData.find();
        return Response.successMessage(res, "all expenses", Data, 201)
    }
    static getOneExpenses = async (req, res) => {
        const expenseId = req.params.id;
        const data = await expenseData.findById(expenseId);
        if (!data) {
            return Response.errorMessage(res, "no expense", 201)
        }
        return Response.successMessage(res, "this is one expense", data, 201)
    }

    static deleteOneExpenses = async (req, res) => {
        const expenseId = req.params.id;
        const data = await expenseData.findByIdAndDelete(expenseId);
        if (!data) {
            return Response.errorMessage(res, "no expenses to be deleted", 417)
        }
        return Response.successMessage(res, "deleted all expenses successfully", data, 201)
    }
    

    static addCategory = async (req, res) => {
        const expenseId = req.params.id;
        let {
            category,
            expectedAmount

        } = req.body
        const data = await expenseData.findByIdAndUpdate(expenseId, {
            $push: {
                categories: {
                    expectedAmount: expectedAmount,
                    category: category
                }
            }
        });
        if (!data) {
            return Response.errorMessage(res, "no category to be updated", 407)
        }
        return Response.successMessage(res, "updated categories successfully", data, 200)

    }
}

export default expenseController;