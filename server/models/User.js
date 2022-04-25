import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      minlength: 3,
      maxlength: 50,
      required: [true, "First Name is required"],
    },
    lastname: {
      type: String,
      minlength: 3,
      maxlength: 50,
      required: [true, "Last Name is required"],
    },
    rollNo: {
      type: String,
      required: true,
      unique: true
    },
    course: {
      type: String,
      enum: ["cse", "ece"],
    },
    contactNo: {
      type: Number,
      required: true,
    },
    dob: {
      type: Date,
    },
    guardianNO: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
      // unique: true,
    },
    roomPref: {
      type: String,
      enum: ["single", "double", "triple"],
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      required: true,
      enum: ["user", "admin", "warden"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["pending", "active"],
      default: "pending",
    },
    confirmationCode: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);

export default User;
