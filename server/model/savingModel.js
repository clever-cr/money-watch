import mongoose from "mongoose";

const savingSchema = new mongoose.Schema({

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
                required: [true, "expected  saving amount is required"]


            }
        }
    ],
    isActive: Boolean


})
savingSchema.pre(/^find/,function(next){
    this.populate({
        path:"userId",
        select:"firstName lastName"
    })
    next();
  })
const savingData = mongoose.model("savings", savingSchema);
export default savingData;