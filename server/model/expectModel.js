
import mongoose from "mongoose";
const ExpectSchema = new mongoose.Schema({
  


   userId:{ String,
   },
  expectations: [
    {
     incomeId: {
       type:String,
       default:"",
     },
      expenseId: {
        type:String,
        default:"",
      },
      startFrom: "",
      endAt: ""
    }
  ]
}
)
const expectData =mongoose.model("expectation",ExpectSchema);
export default ExpectSchema;