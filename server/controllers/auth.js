import User from "../models/User.js";
import bcrypt from "bcryptjs"
import passport from "passport";

export const login = (req, res, next) => {
  try {
    passport.authenticate("local", (err, user) => {
      if (err) throw err;
      if (!user) return res.status(404).json({ message: "no such user exists" });
        
      if(user.status === "active"){
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


export const signup = async (req, res)=>{
    try {
        const user = await User.findOne({email: req.body.email})
       if (user) res.status(409).json({ message: "user already exists" });

       if(!user){
           const salt = await bcrypt.genSalt(10)
           const hashedPassword = await bcrypt.hash(req.body.password, salt)

           const newUser = new User({

           })

           await newUser.save()
       }
    } catch (error) {
        res.status(400).json(error);
    }
}