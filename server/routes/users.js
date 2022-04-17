import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hostel management system api");
});

export default router;
