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
    email: {
      type: String,
      required: true,
      unique: true,
    },
    rollNO: {
      type: String,
      required: true,
    },
    contactNo: {
      type: Number,
      required: true,
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
      unique: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);

export default User;
