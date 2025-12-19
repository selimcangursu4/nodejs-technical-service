import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    customer_fullname: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    alternative_phone: {
      type: String,
      trim: true,
    },
    land_phone: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    city_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },
    district_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "District",
    },
    address: {
      type: String,
      trim: true,
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    color_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Color",
    },
    imei: {
      type: String,
      trim: true,
    },
    warranty_status: {
      type: String,
      enum: ["Garanti Var", "Garanti Yok", "Bilinmiyor"],
      default: "Bilinmiyor",
    },
    warranty_date: {
      type: Date,
    },
    fault_note: {
      type: String,
      trim: true,
    },
    fault_category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FaultCategory",
    },
    priority: {
      type: String,
      enum: ["Normal", "Yuksek", "Acil"],
      default: "Normal",
    },
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    service_status_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceStatus",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);
