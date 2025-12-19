import mongoose from "mongoose";

export const smsLogSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
    },
    message: { type: String },
    user_id: { type: String, ref: "user" },
  },
  { timestamps: true }
);

export default mongoose.model("SmsLog", smsLogSchema);
