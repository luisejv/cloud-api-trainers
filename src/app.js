import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import trainerRoutes from "./routes/trainers.js";
import config from "../config.js";

const connectToDB = async () => {
  try {
    await mongoose.connect(config.db_uri, {});
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/trainers", trainerRoutes);

connectToDB();

export default app;
