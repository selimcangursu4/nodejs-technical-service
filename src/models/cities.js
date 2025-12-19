import mongoose from "mongoose";

export const citySchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("City", citySchema);
