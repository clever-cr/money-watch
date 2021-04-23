import mongoose from "mongoose";
import expectData from "../model/expectModel.js";
const transactionSchema = new mongoose.Schema({

    userId: {
        type: String,
        default: ''
    },
    expectationId: {
        type: String,
        default: ''
    },
    transactions: [
        {
            date: {
                type: String,
                default: new.Date(Date.now())
            },
            amount: {
                type: Number,
                required: [true, "Amount is required"]
            },
            description: {
                type: String,
            },
            categoryId: "",
            enum:[
                "income",
                "expense",
                "saving"
            ]
        }
    ]
}

)