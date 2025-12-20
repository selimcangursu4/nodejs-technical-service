import express from "express";
import { sendSms } from "../controllers/smsContoller";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Yeni Sms Gönder Tekil
router.post("/send-sms", verifyToken, sendSms);

export default router;
