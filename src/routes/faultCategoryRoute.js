import express from "express";
import { store,fetch,update,remove } from "../controllers/faultCategoryController";
const router = express.Router();

// Yeni Arıza Kategorisi Ekleme
router.post("/store", store);
// Tüm Arıza Kategorilerini Listele
router.get("/fetch", fetch);
// Arıza Kategorisini Güncelle
router.post("/update/:id", update);
// Arıza Kategorisini Sil
router.delete("/delete", remove);



export default router;
