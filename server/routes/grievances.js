import express from "express";
import {
  getAllGrievances,
  getGrievance,
  createGrievance,
  updateGrievance,
  deleteGrievance,
} from "../controllers/grievances.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.status(200).json({ message: "grievance routes are working" });
});

router.get("/", getAllGrievances);

router.get("/:id", getGrievance);

router.post("/create", createGrievance);

router.patch("/:id", updateGrievance);

router.delete("/:id", deleteGrievance);

export default router