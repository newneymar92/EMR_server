import e from "express";
import { PatientModel } from "../models/PatientModel.js";

export const getPatients = async (req, res) => {
  try {
    const patients = await PatientModel.find();
    res.status(200).json(patients);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPatient = async (req, res) => {
  try {
    const newPatient = req.body;
    await PatientModel.create({ ...newPatient });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updatePatient = async (req, res) => {
  try {
    const updatePatient = req.body;
    const patient = await PatientModel.findByIdAndUpdate(
      req.params.id,
      updatePatient
    );

    res.status(200).json(patient);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deletePatient = async (req, res) => {
  try {
    await PatientModel.deleteOne({ _id: req.params.id });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
