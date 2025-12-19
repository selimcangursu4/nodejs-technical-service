import express from "express";
import { store,fetch,update } from "../controllers/faultCategoryController";
const router = express.Router();

// Yeni Arıza Kategorisi Ekleme
router.post("/store", store);
// Tüm Arıza Kategorilerini Listele
router.get("/fetch", fetch);
// Arıza Kategorisini Güncelle
router.post("/update/:id", update);


export default router;
