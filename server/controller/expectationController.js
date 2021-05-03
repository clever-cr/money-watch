import expectData from "../model/expectModel.js";
import transactionData from "../model/transactionModel.js";
import Response from "../helpers/response.js";

class expectController {
  static createExpect = async (req, res) => {
    const expectationData = await expectData.create(req.body);

    const transactData = await transactionData.create({
      userId: req.body.userId,
      expectationId: expectationData._doc._id,
    });
    //  console.log(transactData);
   
    return Response.successMessage(
      res,
      "expect created success",
      { expectation: expectationData._doc, transaction: transactData._doc },
      200)
   }

   static getAllExpect = async (req,res) =>{
    
    const Data= await expectData.find();
    
    // const transData= await transactionData.find();

    return Response.successMessage(res, "All Expectations",Data,201)
    
   }
   static getOneExpect = async (req,res) =>{
     const expectId = req.params.id;
     const Expectdata = await expectData.findById(expectId);
     
     return Response.successMessage(res, "One Expectation",Expectdata,201);

   }
  }
 
export default expectController;
