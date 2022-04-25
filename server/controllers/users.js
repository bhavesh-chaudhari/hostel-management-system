import User from "../models/User.js";
// start

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    const activeUsers = users.filter((user)=> user.status === "active")

    res.status(200).json({users: activeUsers})
  } catch (error) {
    console.log(error)
  }
};

export const getUser = async (req, res) => {
  try {
    console.log(req.params.rollNo);
    const rollNumber = req.params.rollNo.toUpperCase();
    console.log(rollNumber);
    const user = await User.findOne({ rollNo: rollNumber });

    if (!user) {
      res.status(404).json({ message: "no user with given roll number" });
      return;
    }

    res.status(200).json({ user: user });
  } catch (error) {
    res.status(400).json(error);
  }
};

