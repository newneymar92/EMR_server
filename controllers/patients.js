import e from "express";
import { counterModel, PatientModel } from "../models/PatientModel.js";

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
    counterModel.findOneAndUpdate(
      { id: "autoval" },
      { $inc: { seq: 1 } },
      { new: true },
      (err, cd) => {
        let seqId;
        if (cd == null) {
          const newVal = new counterModel({ id: "autoval", seq: 1 });
          newVal.save();
        } else {
          seqId = cd.seq;
        }
      }
    );

    const newPatient = req.body;
    console.log({ ...newPatient, id: seqId });
    await PatientModel.create({ ...newPatient, id: seqId });
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
