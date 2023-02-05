import express from "express";
import cors from "cors";
import patients from "./routers/patients.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const URI =
  "mongodb+srv://anhtaihs_92:anhtaihs_92@cluster0.yjwlrzp.mongodb.net/ibme_emr";

app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

app.use("/emr_ibme", patients);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
