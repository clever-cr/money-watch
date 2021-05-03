import mongoose from "mongoose";
const ExpectSchema = new mongoose.Schema({
  userId: {
    type:mongoose.Schema.ObjectId,
    ref:"user",
    required:[true,"user is required"] 
  },
  incomeId: {
    type: mongoose.Schema.ObjectId,
    ref: "income",
  },
  expenseId: {
    type:mongoose.Schema.ObjectId,
    ref: "expense",
  },
  savingId: {
    type: mongoose.Schema.ObjectId,
    ref: "savings",
  },
  startFrom: {
    type: Date,
    default: Date.now(),
  },
  endAt: {
    type: Date,
  },
});

ExpectSchema.pre(/^find/, function (next) {
this.populate({
  path: "userId",
  select: "firstName lastName",
}).populate({
  path: "incomeId",
  select: "category expectedAmount",
}).populate({
  path: "expenseId",
  select: "category expectedAmount",
}).populate({
      path: "savingId",
      select: "category expectedAmount",
})
next();
});
const expectData = mongoose.model("expectation", ExpectSchema);
export default expectData;
