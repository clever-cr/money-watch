import mongoose from "mongoose";

const savingSchema = new mongoose.Schema({

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
                required: [true, "expected  saving amount is required"]


            }
        }
    ],
    isActive: Boolean


})
const savingData = mongoose.model("savings", savingSchema);
export default savingData;