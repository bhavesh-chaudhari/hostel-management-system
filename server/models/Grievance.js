import mongoose from "mongoose";

const GrievanceSchema = new mongoose.Schema(
  {
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    user: {
      type: String
    }
  },
  { timestamps: true }
);

const Grievance = mongoose.model("grievance", GrievanceSchema);

export default Grievance;
