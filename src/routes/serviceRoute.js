import express from "express";
import {
  store,edit,fetch
} from "../controllers/serviceController";
const router = express.Router();

// Yeni Servis Kaydı Ekle Ekleme
router.post("/store", store);
router.get("/edit/:id", edit);
router.get("/fetch", fetch);
export default router;
