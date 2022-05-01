import Notice from "../models/Notice.js";

export const getAllNotices = async (req, res) => {
  try {
    const allNotices = await Notice.find();

    res.status(200).json({ notices: allNotices });
  } catch (error) {
    console.log(error);
  }
};

export const getNotice = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const createNotice = async (req, res) => {
  try {

    const  notice = req.body

    console.log(notice)

    const newNotice = new Notice({...notice, postedBy: req.user?._id})

    console.log(newNotice)

    await newNotice.save()

    res.status(201).json({message: "notice created successfully", notice: newNotice})
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const updateNotice = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const deleteNotice = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error });
  }
};
