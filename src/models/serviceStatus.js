import mongoose from "mongoose";

export const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: { type: String },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Brand", brandSchema);
