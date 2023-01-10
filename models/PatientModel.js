import mongoose from "mongoose";
import { nanoid } from "nanoid";
mongoose.set("useFindAndModify", false);

const counterSchema = new mongoose.Schema({
  id: String,
  seq: Number,
});

export const counterModel = mongoose.model("counter", counterSchema);

const schema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(7),
  },
  title: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    default: "abc@gmail.com",
  },
  phone: {
    type: Number,
    default: 0,
  },
  occupation: {
    type: String,
  },
  sex: {
    type: String,
  },
});

export const PatientModel = mongoose.model("Patient", schema);
