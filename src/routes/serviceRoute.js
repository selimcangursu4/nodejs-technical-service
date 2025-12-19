import express from "express";
import {
  store,
} from "../controllers/serviceController";
const router = express.Router();

// Yeni Servis Kaydı Ekle Ekleme
router.post("/store", store);

export default router;
