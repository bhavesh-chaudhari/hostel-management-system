import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    heading: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, {timestamps: true})

const Notice = mongoose.model("notice", NoticeSchema)

export default Notice