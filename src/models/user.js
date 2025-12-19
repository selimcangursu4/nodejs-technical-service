import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: [
        "Admin",
        "Yönetici",
        "Teknisyen",
        "Çağrı Merkezi Elemanı",
        "Kargo Elemanı",
        "Kalite Kontrol Elemanı",
      ],
      default: "Teknisyen"
    },

    isActive: {
      type: Boolean,
      default: true
    },

    phone: {
      type: String
    },

    businessPhone: {
      type: String
    },

    birthday: {
      type: Date
    },

    gender: {
      type: String,
      enum: ["Erkek", "Kadın", "Bilinmiyor"],
      default: "Bilinmiyor"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("User", userSchema);
