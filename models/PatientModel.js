import mongoose from "mongoose";
import Inc from "mongoose-sequence";
const AutoIncrement = Inc(mongoose);

const schema = new mongoose.Schema(
  {
    _id: Number,
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
  },
  { _id: false }
);
schema.plugin(AutoIncrement);
export const PatientModel = mongoose.model("Patient", schema);
