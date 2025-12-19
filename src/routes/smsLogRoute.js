import express from "express";
import {
  sendSms,
} from "../controllers/smsContoller";
const router = express.Router();

// Yeni Sms Ekleme
router.post("/send-sms", sendSms);

export default router;
