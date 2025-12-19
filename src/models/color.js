import mongoose from "mongoose";

export const colorSchema = new mongoose.Schema(
  {
    name: { type: String },
    isActive: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Color", colorSchema);
