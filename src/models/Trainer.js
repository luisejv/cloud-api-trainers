import mongoose from "mongoose";

const TrainerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  money: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Trainer", TrainerSchema);
