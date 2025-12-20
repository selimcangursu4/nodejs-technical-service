import express from "express";
import {
  store,
  fetch,
  activeUpdate,
  remove,
} from "../controllers/ticketController.js";
const router = express.Router();
import { verifyToken } from "../middlewares/authMiddleware.js";

// Yeni Etiket Ekleme
router.post("/store", verifyToken, store);
// Tüm Etiketleri Listele
router.get("/fetch", verifyToken, fetch);
// Etiketi Sil
router.delete("/delete/:id", verifyToken, remove);
// Etiket Aktiflik Durumunu Güncelle
router.post("/active-update", verifyToken, activeUpdate);
export default router;
