import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: [true, "email already exist"],
    required: [true, "email required"],
  },
  address: [{
    province: String,
    district: String,
    sector: String
  }],
  phoneNumber: { type: String, required: [true, "Phone number required"] },
  gender: { type: String, enum: ["male", "female"] },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
    default: "user",
  },
  password: { type: String, required: [true, "password required"] },
  
  passwordChangedTime: {
    type: String,
    default:Date( Date.now()),
  },
  isActive: {
    type: Boolean,
    default: true
  }

  });

const userInfo = mongoose.model("user", userSchema);

export default userInfo;
