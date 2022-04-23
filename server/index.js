import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";
import CONNECT_DB from "./db/connect.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import passport from "passport";
import passportStrategy from "./config/passportConfig.js"

// initialize app
const app = express();
app.use(express.json())

// configure dotenv
dotenv.config({ path: "./config/.env" });

// cors
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// express session
app.use(
  session({
    secret: "_cold_",
    resave: false,
    saveUninitialized: true,
  })
);

// passport 
app.use(passport.initialize())
app.use(passport.session())
passportStrategy(passport)

// routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);

// read environment variables from .env
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// start listening on port after connected to db
const startServer = async () => {
  try {
    await CONNECT_DB(MONGO_URI);
    app.listen(PORT, () => {
      //   console.log("Database connected");
      console.log(`server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
