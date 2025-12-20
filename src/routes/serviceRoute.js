import express from "express";
import {
  store,
  edit,
  fetch,
  update,
  remove,
  createActivities,
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
// Seçili Servis Kaydını Sil
router.delete("/delete/:id", remove);
// Servis Kayıt Aktivitesi Gir
router.post("create-activities/:id", createActivities);
export default router;
