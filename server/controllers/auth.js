import User from "../models/User.js";
import bcrypt from "bcryptjs";
import passport from "passport";
import { sendMail } from "../mail/mail.js";

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
      }
    })(req, res, next);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const signup = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({ rollNo: req.body.rollNo });
    if (user) res.status(409).json({ message: "user already exists" });

    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const { password, ...handleUser } = req.body;

      console.log(handleUser);

      const newUser = new User({ ...handleUser, password: hashedPassword });

      await newUser.save();

      sendMail(
        "bhic2030@gmail.com",
        "Registered successfully",
        "wow nice bro",
        "<h1>Wow nice bro<h1/>"
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
