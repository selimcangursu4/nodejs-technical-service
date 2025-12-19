import express from "express";
import {
  store,edit,fetch,update
} from "../controllers/serviceController";
const router = express.Router();

// Yeni Servis Kaydı Ekle Ekleme
router.post("/store", store);
// Servis Kayıt Detaylarını Getir
router.get("/edit/:id", edit);
// Tüm Servis Kayıtlarını Getir
router.get("/fetch", fetch);
// Seçili Servis Kayıt Bilgilerini Güncelle
router.post("/update/:id", update);

export default router;
