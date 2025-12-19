import express from "express";
import {
  store,
  fetch,
  edit,
  remove,
} from "../controllers/productController.js";
const router = express.Router();

// Yeni Ürün Ekleme
router.post("/store", store);
// Tüm Ürünleri Listele
router.post("/fetch", fetch);
router.get("/edit/id", edit);
router.delete("/remove/id", remove);

export default router;
