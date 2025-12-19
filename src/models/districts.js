import mongoose from "mongoose";

export const districtSchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("District", districtSchema);
