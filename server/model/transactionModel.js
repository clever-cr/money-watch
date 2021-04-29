import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: [true, "user is required"],
  },
  expectationId: {
    type: mongoose.Schema.ObjectId,
    ref: "expectation",
  },
  transactions: [
    {
      date: {
        type: Date,
        default: Date(Date.now()),
      },
      amount: {
        type: Number,
        required: [true, "Amount is required"],
      },
      description: {
        type: String,
      },
      transactionType: {
        type: String,
        enum: ["expense", "income", "savings"],
        required: true,
      },
      incomeCategoryId: {
        type: mongoose.Schema.ObjectId,
        ref: "income",
      },
      expenseCategoryId: {
        type: mongoose.Schema.ObjectId,
        ref: "expense",
      },
      savingCategoryId: {
        type: mongoose.Schema.ObjectId,
        ref: "saving",
      },
    },
  ],
});

transactionSchema.pre(/^find/, function (next) {
  this.populate({
    path: "userId",
    select: "firstName lastName",
  }).populate({
    path: "expectationId",
    select: "incomeId expenseId savingId",
  }).populate({
    path: "incomeCategoryId",
    select: "category expectedAmount",
  }).populate({
    path: "expenseCategoryId",
    select: "category expectedAmount",
  }).populate({
        path: "savingCategoryId",
        select: "category expectedAmount",
      })
  next();
});
const transactionData = mongoose.model("transaction", transactionSchema);
export default transactionData;
