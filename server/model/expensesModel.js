import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({

    userId: {
        type:mongoose.Schema.ObjectId,
            ref:"user",
            required:[true,"user is required"]


    },
    categories: [
        {
            category: {
                type: String,
                required: [true, "category is required"]
            },

            expectedAmount: {

                type: Number,
                required: [true, "expected amount is required"]
            },

            actualAmount:{
                type: Number
                
              }
        }
    ],
    isActive: Boolean,


})
expenseSchema.pre(/^find/,function(next){
    this.populate({
        path:"userId",
        select:"firstName lastName"
    })
    next();
  })
const expenseData = mongoose.model("expense", expenseSchema);
export default expenseData;