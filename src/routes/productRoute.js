import express from "express";
import {
  store,
  fetch,
  edit,
  remove,
  update,
} from "../controllers/productController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Yeni Ürün Ekleme
router.post("/store", verifyToken, store);
// Tüm Ürünleri Listele
router.post("/fetch", verifyToken, fetch);
// Ürün Detaylarını Getir
router.get("/edit/:id", verifyToken, edit);
// Ürün Sil
router.delete("/remove/:id", verifyToken, remove);
// Ürün Bilgileri Güncelle
router.post("/update/:id", verifyToken, update);

export default router;
