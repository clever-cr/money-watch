import mongoose from "mongoose";
const ExpectSchema = new mongoose.Schema({
  userId: {type:String },

  incomeId: {
    type: String,
    default: "",
  },
  expenseId: {
    type: String,
    default: "",
  },
  savingId: {
    type: String,
    default: "",
  },
  startFrom: {
    type: Date,
    default: Date.now(),
  },
  endAt: {
    type: Date,
  },
});
const expectData = mongoose.model("expectation", ExpectSchema);
export default expectData;
