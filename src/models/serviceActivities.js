import mongoose from "mongoose";

export const serviceActivitiesSchema = new mongoose.Schema(
  {
    service_id: {
      type: mongoose.Types.ObjectId,
    },
    note: { type: String },
    user_id: { type: mongoose.Types.ObjectId },
    status_id: { type: mongoose.Types.ObjectId },
  },
  { timestamps: true }
);

export default mongoose.model("ServiceActivities", serviceActivitiesSchema);
