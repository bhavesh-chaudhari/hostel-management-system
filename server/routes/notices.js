import express from "express"
import { getAllNotices, getNotice, createNotice, updateNotice, deleteNotice } from "../controllers/notices.js"

const router = express.Router()

router.get("/test", (req, res)=>{
    console.log(req.id)
    res.status(200).json({message: "notice routes are working"})
})

router.get("/", getAllNotices)

router.get("/:id", getNotice)

router.post("/create", createNotice)

router.patch("/:id", updateNotice)

router.delete("/:id", deleteNotice)

export default router