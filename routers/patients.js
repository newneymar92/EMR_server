import express from "express";
import mongoose from "mongoose";
import {
  getPatients,
  createPatient,
  updatePatient,
  deletePatient,
} from "../controllers/patients.js";

const router = express.Router();

router.get("/patient", getPatients);

router.post("/patient", createPatient);

router.put("/patient/:id", updatePatient);

router.delete("/patient/:id", deletePatient);

export default router;
