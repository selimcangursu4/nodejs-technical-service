import express from "express";
import { store, fetch, update, remove } from "../controllers/faultCategoryController";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Yeni Arıza Kategorisi Ekleme
router.post("/store", verifyToken, store);
// Tüm Arıza Kategorilerini Listele
router.get("/fetch", verifyToken, fetch);
// Arıza Kategorisini Güncelle
router.post("/update/:id", verifyToken, update);
// Arıza Kategorisini Sil
router.delete("/delete", verifyToken, remove);

export default router;
