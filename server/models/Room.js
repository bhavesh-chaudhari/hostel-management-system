import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  roomNo: {
    type: Number,
  },
  floorNo: {
    type: Number,
  },
  occupancyType: {
    type: String,
    enum: ["single", "double", "triple"],
    default: "triple",
  },
  occupants: {
    type: Array,
  },
  status: {
    type: String,
    enum: ["vacant", "semi-vacant", "non-vacant"],
  },
});