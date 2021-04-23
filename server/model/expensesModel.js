import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({

    userId: {


        type: String,
        default: ''


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
    isActive: Boolean


})
const expenseData = mongoose.model("expense", expenseSchema);
export default expenseData;