import express from "express";
import { store,fetch } from "../controllers/faultCategoryController";
const router = express.Router();

// Yeni Arıza Kategorisi Ekleme
router.post("/store", store);
// Tüm Arıza Kategorilerini Listele
router.get("/fetch", fetch);


export default router;
