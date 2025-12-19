import express from "express";
import {
  store,
  fetch,
  edit,
  remove,
  update
} from "../controllers/productController.js";
const router = express.Router();

// Yeni Ürün Ekleme
router.post("/store", store);
// Tüm Ürünleri Listele
router.post("/fetch", fetch);
// Ürün Detaylarını Getir
router.get("/edit/:id", edit);
// Ürün Sil
router.delete("/remove/:id", remove);
// Ürün Bilgileri Güncelle
router.post("/update/:id", update);

export default router;
