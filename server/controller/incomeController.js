import IncomeData from "../model/incomeModel.js";
import Response from "../helpers/Response.js";
import { response } from "express";




class IncomeController {
    static createIncome = async (req, res) => {
        let {
            incomes,
            expectedAmount,
            category,
            startBalance,
            isActive
        } = req.body
        const Data = await IncomeData.create(req.body);
        console.log(Data);

        if (!Data) {
            return Response.errorMessage(res, "Income failed", 417)

        }
        return Response.successMessage(res, "Income created successfully", Data, 201)

    }

    static getAllIncomes = async (req, res) => {
        const Data = await IncomeData.find();

        return Response.successMessage(res, "it is An Income ", Data, 201)
    }
    //  static getOneIncome = async(req, res) => {
    //     const incomeId = req.params.id;
    //    const Data =await IncomeData.findById(userId);


    //   if (!Data) {
    //       return Response.errorMessage(res,"we don't have this Income",417)

    //   }
    //   return Response.successMessage(res,"successful done",data,201)

    // }                                     
    static getOneIncome = async (req, res) => {
        const incomeId = req.params.id;
        const Data = await IncomeData.findById(incomeId);
        console.log(incomeId);
        console.log(Data);
        if (!Data) {

            return Response.errorMessage(res, "doesn't get it", 417)

        }
        return Response.successMessage(res, "successfully done", Data, 200)
    };

    static deleteOneIncome = async (req, res) => {
        const incomeId = req.params.id;
        const Data = await IncomeData.findByIdAndDelete(incomeId);
        if (!Data) {
            return Response.errorMessage(res, "no   income to be deleted", 417)
        }
        return Response.successMessage(res, " successfully deleted", Data, 201)
    }
    static updateIncome= async (req, res) => {
        const incomeId = req.params.id;
        let {
            incomes,
            expectedAmount,
            category,
            startBalance,
            isActive
        } = req.body
        const Data = await IncomeData.findByIdAndUpdate(incomeId,req.body);
        if (!Data) {
       return Response.errorMessage(res,"no income to be updated",417) 
        } 
        const DataUpdated= await IncomeData.findById(incomeId);
        return Response.successMessage(res, "Income successfully Updated", DataUpdated, 200) 
}


}
export default IncomeController;


