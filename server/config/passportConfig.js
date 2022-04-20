import User from "../models/User";
import bcrypt from "bcryptjs"
import passportLocal from "passport-local"

const localStrategy = passportLocal.Strategy

const passportStrategy = (passport)=>{
    
  passport.use(
    new localStrategy(
      { usernameField: "email", passwordField: "password" },
      (username, password, done) => {
        User.findOne({ email: username }, (err, user) => {
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
        });
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
}

export default passportStrategy