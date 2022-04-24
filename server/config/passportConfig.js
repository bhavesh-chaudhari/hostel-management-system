import User from "../models/User.js";
import bcrypt from "bcryptjs";
import passportLocal from "passport-local";

const localStrategy = passportLocal.Strategy;

const passportStrategy = (passport) => {
  passport.use(
    new localStrategy(
      { usernameField: "rollNo", passwordField: "password" },
      async (username, password, done) => {
        try {
          await User.findOne({ rollNo: username }, (err, user) => {
            if (err) throw err;
            if (!user) return done(null, false);
            bcrypt.compare(password, user.password, (err, result) => {
              if (err) throw err;
              if (result === true) {
                return done(null, user);
              } else {
                return done(null, false);
              }
            });
          }).clone();
        } catch (error) {
          console.log(error);
        }
      }
    )
  );

  // save userid in session cookie
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // retrieve the whole object stored in session
  passport.deserializeUser((id, done) => {
    User.findOne({ _id: id }, (err, user) => {
      done(err, user);
    });
  });
};

export default passportStrategy;
