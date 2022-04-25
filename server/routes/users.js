import express from "express";
import { getUser, getAllUsers, getUserWithId } from "../controllers/users.js";

const router = express.Router();

router.get("/", getAllUsers)

router.get("/:rollNo", getUser)

router.get("/id/:id", getUserWithId)

export default router;
