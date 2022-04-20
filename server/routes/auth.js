import express from "express";
import {login, signup} from "../controllers/auth.js"

// load user model
import User from "../models/User.js";

const router = express.Router();

// @route   POST /signup
// @desc    Test auth route
// @access  Public
router.get("/test", (req, res) => {
  res.status(200).json({ message: "auth route is working properly" });
});

// @route   POST /signup
// @desc    Signup user
// @access  Public
router.post("/signup", signup);

// @route   POST /login
// @desc    Login user
// @access  Public
router.post("/login", login);

export default router;
