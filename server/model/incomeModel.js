import mongoose from "mongoose";
const incomeSchema = new mongoose.Schema({

      userId:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
        required:[true,"user is required"] 
     },
     categories: [
       {
         category:{
             type: String,
           require:[true," category is required"]
        }  ,
        expectedAmount:{
              type: Number,
            required:[true,"Amount is required"]
        } ,
      }
    ],
    transactionId: [{
      type: mongoose.Schema.ObjectId,
      ref:"transaction"
  }],
    startBalance: Number,
    isActive:{
      type:Boolean,
      
    }
  })
incomeSchema.pre(/^find/,function(next){
  this.populate({
      path:"userId",
      select:"firstName lastName"
  }).populate({
        path:"transactionId",
        select:"transactionType amount"
  })
  next();
})


const IncomeData= mongoose.model("income",incomeSchema);
export default IncomeData;
