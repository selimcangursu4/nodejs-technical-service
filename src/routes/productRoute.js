import express from "express";
import { store, fetch, edit } from "../controllers/productController.js";
const router = express.Router();

// Yeni Ürün Ekleme
router.post("/store", store);
// Tüm Ürünleri Listele
router.post("/fetch", fetch);
router.get("/edit/id", edit);

export default router;
