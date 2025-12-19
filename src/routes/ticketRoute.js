import express from "express";
import {
  store,
  fetch,
  activeUpdate,
  remove,
} from "../controllers/ticketController.js";
const router = express.Router();

// Yeni Etiket Ekleme
router.post("/store", store);
// Tüm Etiketleri Listele
router.get("/fetch", fetch);
// Etiketi Sil
router.delete("/delete/:id", remove);
// Etiket Aktiflik Durumunu Güncelle
router.post("/active-update", activeUpdate);
export default router;
