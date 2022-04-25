import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
}, {timestamps: true})

const Notice = mongoose.model("notice", NoticeSchema)

export default Notice