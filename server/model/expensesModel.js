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

            }
        }
    ],
    isActive: Boolean,

    transactionId: [{
        type: mongoose.Schema.ObjectId,
        ref:"transaction"
    }]


})
expenseSchema.pre(/^find/,function(next){
    this.populate({
        path:"userId",
        select:"firstName lastName"
    }).populate({
        path:"transactionId",
        select:"transactionType amount"
    })
    next();
  })
const expenseData = mongoose.model("expense", expenseSchema);
export default expenseData;