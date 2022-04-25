import express from "express";
import { getUser, getAllUsers } from "../controllers/users.js";

const router = express.Router();

router.get("/", getAllUsers)

router.get("/:rollNo", getUser)

export default router;
