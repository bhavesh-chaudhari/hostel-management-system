import Grievance from "../models/Grievance.js";

export const getAllGrievances = async (req, res) => {};

export const getGrievance = async (req, res) => {};

export const createGrievance = async (req, res) => {
    try {
      const grievance = req.body;

      console.log(grievance);

      const newGrievance = new Grievance({ ...grievance, postedBy: req.user?._id });

      console.log(newGrievance);

      await newGrievance.save();

      res
        .status(201)
        .json({ message: "grievance created successfully", grievance: newGrievance });
    } catch (error) {
      res.status(400).json({ error });
    }
};

export const updateGrievance = async (req, res) => {};

export const deleteGrievance = async (req, res) => {};
