import savingData from "../model/savingModel.js";
import Response from "../helpers/response.js";


class savingController {

    static createSaving = async (req, res) => {
        const Data = await savingData.create(req.body);
        if (!Data) {
            return Response.errorMessage(res, "Failed to enter savings", 417)
        }
        return Response.successMessage(res, "savings entered successfully", Data, 201)
    }

    static getAllSaving = async(req, res) => {
        const Data = await savingData.find();
     return Response.successMessage(res,"all saving",Data,201)
     }
     
static deleteOneSaving= async (req, res) => {
    const savingId = req.params.id;
    const data = await savingData.findByIdAndDelete(savingId);
    if (!data) {
   return Response.errorMessage(res,"no savings  to be deleted",417) 
    }  
    return Response.successMessage(res, "deleted all savings successfully", data, 201) 
}
     static getOneSaving= async (req, res) => {
        const savingId = req.params.id;
        const data = await savingData.findById(savingId);
        if (!data) {
       return Response.errorMessage(res,"no saving",201) 
        }  
        return Response.successMessage(res, "this is one saving", data, 201) 
}
static addCategory = async (req, res) => {
    const savingId = req.params.id;
    let {
        category,
        expectedAmount

    } = req.body
    const data = await savingData.findByIdAndUpdate(savingId, {
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

// static updateSaving= async (req, res) => {
//     const savingId = req.params.id;
//     let {
//         savings,
//         expectedAmount,
//         category,
//         startBalance,
//         isActive
//     } = req.body
//     const data = await savingData.findByIdAndUpdate(savingId,{
//         expectedAmount:expectedAmount
//     });
//     if (!data) {
//    return Response.errorMessage(res,"no savings to be updated",417) 
//     } 
//     return Response.successMessage(res, "savings has successfully Updated", data, 200) 

// }



}
export default savingController;