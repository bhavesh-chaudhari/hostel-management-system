import User from "../models/User.js";
import bcrypt from "bcryptjs";
import passport from "passport";
import { sendMail } from "../mail/mail.js";
import jwt from "jsonwebtoken";

export const login = (req, res, next) => {
  try {
    passport.authenticate("local", (err, user) => {
      if (err) throw err;
      if (!user)
        return res.status(404).json({ message: "no such user exists" });

      if (user.status === "active") {
        req.login(user, (err) => {
          if (err) throw err;
          res.status(200).json({
            loggedInUser: req.user,
            message: "account is active and user is authenticated successfully",
          });
          // console.log(req.user);
        });
      } else {
        res.status(403).json({ message: "user account is not activated" });
      }
    })(req, res, next);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const signup = async (req, res) => {
  // console.log(req.body);
  try {
    const user = await User.findOne({ rollNo: req.body.rollNo });
    if (user) res.status(409).json({ message: "user already exists" });

    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const { password, ...handleUser } = req.body;

      // console.log(handleUser);

      // create confirmation token
      const token = jwt.sign(
        { rollNo: req.body.rollNo },
        process.env.JWT_SECRET
      );

      const newUser = new User({
        ...handleUser,
        password: hashedPassword,
        confirmationCode: token,
      });

      await newUser.save();

      const link = `http://localhost:3000/confirm-mail/${token}`;

      sendMail(
        // "bhic2030@gmail.com",
        `${newUser.rollNo.toLowerCase()}@iiitn.ac.in`,
        "Registered successfully",
        "wow nice bro",
        `<h1>You have successfully registered for IIITN Hostel. Click below email verification link to activate your account.<h1/>
        <a href='${link}'>Confirm Your Email</a>
        </br>
        <p>*Link only valid for 2 hours</p>
        `
      )
        .then((res) => console.log(res))
        .catch((error) => console.log(error));

      return res
        .status(200)
        .json({ message: "user registered successfully", user: newUser });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export const confirmUserEmail = async (req, res) => {
  console.log(req.params.confirmationCode);

  const user = await User.findOne({
    confirmationCode: req.params.confirmationCode,
  });

  if (!user) {
    res.status(404).json({ message: "no user found" });
    return;
  }

  console.log("user email is verified");
  const updatedUser = await User.findOneAndUpdate(
    { confirmationCode: req.params.confirmationCode },
    { status: "active", $unset: { confirmationCode: 1 } },
    { new: true }
  );

  req.login(updatedUser, (err) => {
    if (err) throw err;
    res.status(200).json({
      loggedInUser: req.user,
      message: "user email is verified and user is logged in successfully",
    });
  });
};

export const logout = (req, res) => {
  req.logout();
  res.status(200).json({ message: "logged out successfully" });
};

export const authenticatedUser = (req, res) => {
  if (req.user) {
    const { password, updatedAt, ...authenticatedUser } = req.user._doc;
    res.status(200).json({ authenticatedUser: authenticatedUser });
  } else {
    res.status(404).json({ message: "no logged in user" });
  }
};

export const forgotPassword = (req, res) => {};

export const resetPassword = (req, res) => {};
