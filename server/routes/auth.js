import express from "express";
import {login, signup, logout, authenticatedUser, forgotPassword, resetPassword, confirmUserEmail} from "../controllers/auth.js"

// load user model
import User from "../models/User.js";

const router = express.Router();

// @route   GET /test
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

// @route   GET /logout
// @desc    Logout user
// @access  Private
router.get("/logout", logout)

// @route   GET /authenticatedUser
// @desc    Get Authenticated User
// @access  Private
router.get("/authenticatedUser", authenticatedUser);

router.get("/confirm-mail/:confirmationCode", confirmUserEmail)

router.post("/forgot-password", forgotPassword)

router.post("/reset-password", resetPassword)

export default router;
