import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 50,
      required: [true, "Name is required"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);

export default User;
