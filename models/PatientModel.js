import mongoose from "mongoose";
import Inc from "mongoose-sequence";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdef", 10);
const AutoIncrement = Inc(mongoose);

const schema = new mongoose.Schema(
  {
    _id: Number,
    patient_id: {
      default: nanoid(),
      type: String,
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
    identity_number: {
      type: Number,
    },
    phone_patient: {
      type: Number,
      default: 0,
    },
    occupation: {
      type: String,
    },
    sex: {
      type: String,
    },
    dob: {
      type: Date,
      default: Date.now(),
    },
  },
  { _id: false }
);
schema.plugin(AutoIncrement);
export const PatientModel = mongoose.model("Patient", schema);
